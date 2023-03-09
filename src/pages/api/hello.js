// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// create an API endpoint as a Node.js serverless function.
// They can be deployed as Serverless Functions
// API endpoint란? 웹 API(웹 어플리케이션 프로그래밍 인터페이스)에서 호출할 수 있는 특정한 URL 주소를 말합니다. 이 URL 주소를 사용하여 웹 서버에 요청을 보내고, 웹 서버는 이 요청을 처리한 후 응답을 반환합니다. API endpoint는 보통 RESTful API에서 사용됩니다. 이러한 API에서는 각 엔드포인트가 특정 리소스를 나타내며, HTTP 메서드(GET, POST, PUT, DELETE 등)를 사용하여 리소스를 작성, 읽기, 업데이트, 삭제할 수 있습니다.
// API Router를 이용하여 함수를 만들면 해당 경로에 대한 HTTP 요청에 대한 처리(Restful)를 serverless function(해당 함수)으로 처리.
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
