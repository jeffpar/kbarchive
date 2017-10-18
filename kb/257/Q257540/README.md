---
layout: page
title: "Q257540: DCOM Program Does Not Work After Suspend or Docking Change"
permalink: kb/257/Q257540/
---

## Q257540: DCOM Program Does Not Work After Suspend or Docking Change

	Article: Q257540
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): kbhw kbnetwork win95 kbHardware
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run a Distributed Component Object Model (DCOM) client program on your
	computer, shut it down, and then suspend and resume the computer, the program
	may not reconnect to the server when you run it again. In general, this problem
	can occur if device re-enumeration causes the network adapter to unbind from and
	rebind to the network transport. For example, undocking or docking a laptop
	computer may cause this issue.
	
	The program may generate an error message indicating that the Remote Procedure
	Call (RPC) server is unavailable, is too busy, or that an RPC call did not
	succeed.
	
	The following error message may occur subsequent to performing normal
	CoCreateInstanceEx and QueryInterface calls:
	
	  Function: ConnectionPointContainer::FindConnectionPoint()
	  Error: RPC_S_SERVER_UNAVAILABLE
	
	The following error message has been reported to occur when you are using a
	Microsoft Visual Basic client that communicates with a Microsoft Windows
	NT-based ATL COM server:
	
	  Function: CreateObject(class,[servername])
	  Error: RPC_S_SERVER_UNAVAILABLE
	
	The following error messages have also been reported:
	
	  Function: IConnectionPoint::Advise()
	  Error: RPC_CALL_FAILED
	
	For all cases, this error message must occur instead:
	
	  Error: RPC_SERVER_TOO_BUSY
	
	CAUSE
	=====
	
	In general terms, the client proxy object for the remote component is not
	properly reinitialized if the transport has been unbound and then rebound to the
	network adapter. More specifically, the client RPC Locator service does not
	synchronize with the server socket connection when the program attempts to
	obtain the object connection point.
	
	The network transport does not maintain enough internal status through the
	suspend and resume process to allow RPC bindings to be cached successfully.
	
	The problem in Windows 95 is essentially structural, encompassing NDIS, most of
	the TCP/IP transport components, Windows Sockets (WinSock), and Configuration
	Manager. Extensive enhancements to power-state handling in the equivalent
	Microsoft Windows 98 components resolve this issue.
	
	Note that this problem is not caused by any problems in DCOM, which is
	essentially identical for both Windows 95 and Windows 98.
	
	
	RESOLUTION
	==========
	
	
	Microsoft recommends that you upgrade to Windows 98 if this problem precludes
	efficient usage of DCOM programs on your computer.
	
	WORKAROUND
	==========
	
	To work around this problem, restart your computer to cause the DCOM program to
	work normally again.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	DCOM connection management uses a ping mechanism for detecting remote object
	abnormal termination. On the client, this exists as a separate thread within the
	RPC Locator service (RPCSS).
	
	The following sample output is an edited version of the RPC ping activity from a
	Windows 98-based client that refreshes the DCOM interface on the RPC Locator
	service connection. This client/server communication does not occur between a
	Windows 95-based client and the server mainly because the protocol stack
	(TCP/IP) does not maintain internal persistent address objects through the NDIS
	unbind and rebind process:
	
	  
	
	  Src Dst Protocol Description
	  --- --- -------- ----------------------------------------------------------------
	  CLI SRV MSRPC    c/o RPC Request: call 0x2  opnum 0x2  context 0x0  hint 0x40
	       TCP:     .AP..., len:112, seq:x-x, ack:y, win:a, src:1046 dst: 135 
	  SRV CLI MSRPC    c/o RPC Response: call 0x2  context 0x0  hint 0x10 cancels 0x0
	       TCP:     .AP..., len: 64, seq:y-y, ack:x, win:b, src: 135 dst:1046 
	  CLI SRV TCP      .A...., len:  0, seq:x-x, ack:y, win:c, src:1046 dst: 135
	
	
	When the client attempts to bind to the remote object (which is carried out
	through a Windows Sockets connect), the server tries to synchronize the
	connection to the client locator service (on well-known port 135).
	
	The following sample output is an edited version of the RPC problem that occurs
	between a Windows 95-based client and the server. The error message that is
	returned by the server as a result of the unsuccessful connection
	synchronization attempt is returned to the program:
	
	  
	
	  Src Dst Protocol Description
	  --- --- -------- ----------------------------------------------------------------
	  CLI SRV MSRPC    c/o RPC Alt-Cont: UUID <value> call 0x2 ...
	  SRV CLI MSRPC    c/o RPC Alt-Cont Rsp: call 0x2 ...
	  CLI SRV MSRPC    c/o RPC Request:      call 0x3 opnum 0x5 context 0x2 hint 0xBA
	  SRV CLI TCP      ....S., len:  0, seq:n-n, ack:0, win:z, src:1055 dst: 135
	  CLI SRV TCP      .A.R.., len:  0, seq:0-0, ack:m, win:0, src: 135 dst:1055
	  SRV CLI TCP      ....S., len:  0, seq:n-n, ack:0, win:z, src:1055 dst: 135
	  CLI SRV TCP      .A.R.., len:  0, seq:0-0, ack:m, win:0, src: 135 dst:1055
	  SRV CLI TCP      ....S., len:  0, seq:n-n, ack:0, win:z, src:1055 dst: 135
	  CLI SRV TCP      .A.R.., len:  0, seq:0-0, ack:m, win:0, src: 135 dst:1055
	  SRV CLI TCP      ....S., len:  0, seq:n-n, ack:0, win:z, src:1055 dst: 135
	  CLI SRV TCP      .A.R.., len:  0, seq:0-0, ack:m, win:0, src: 135 dst:1055
	  SRV CLI MSRPC    c/o RPC Fault: call 0x3  context 0x2 status 0x800706BA ...
	
	  NOTE: 0x800706BA is the RPC_S_SERVER_UNAVAILABLE error value.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbhw kbnetwork win95 kbHardware 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	Issue type        : kbprb
	
	=============================================================================
	
