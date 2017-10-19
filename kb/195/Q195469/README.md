---
layout: page
title: "Q195469: STOP 0xEFFFFFFF Exception in OLE Servers with Multiple Clients"
permalink: /kb/195/Q195469/
---

## Q195469: STOP 0xEFFFFFFF Exception in OLE Servers with Multiple Clients

	Article: Q195469
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When multiple clients are concurrently accessing an out of process COM server,
	client calls may fail unexpectedly. Debugging the server during such failures
	shows that the server is throwing exception 0xEFFFFFFF.
	
	Recognizing this problem can be difficult because both the client and the server
	applications may continue running. In particular, this exception does not
	directly result in causing of the server or the client to stop responding (hang)
	or a crash.
	
	Rather, the server simply returns a failure to the client. Whether the client
	continues functioning correctly after such a failure will depend entirely on how
	the client software is written. Well behaved client applications may silently
	retry the operation or log an error without being otherwise adversely affected.
	Clients that do not take care to check the return status of their function calls
	may experience access violations or other fatal errors.
	
	To confirm whether this problem is the cause of a specific failure, it is
	necessary to debug the server application, set the debugger to break on this
	exception, and compare the resultant stack to the one below:
	
	  RPCRT4! RpcRaiseException@4 + 49 bytes
	  OLE32! ThreadInvoke(struct _RPC_MESSAGE *) + 524 bytes
	  RPCRT4! DispatchToStubInC@12 + 52 bytes
	  RPCRT4! RPC_INTERFACE::DispatchToStubWorker(struct _RPC_MESSAGE *,
	               unsigned int,long *) + 292 bytes
	  RPCRT4! RPC_INTERFACE::DispatchToStub(struct _RPC_MESSAGE *,
	               unsigned int,long *) + 93 bytes
	  RPCRT4! RPC_INTERFACE::DispatchToStubWithObject(struct _RPC_MESSAGE *,
	               class RPC_UUID *,unsigned int,long *) + 176 bytes
	  RPCRT4! WMSG_SASSOCIATION::DealWithRequestMessage(union _WMSG_MESSAGE *,
	               union _WMSG_MESSAGE *,struct _RPC_MESSAGE *,
	               class WMSG_SBINDING * *,unsigned int,int,int,int) + 826
	               bytes
	  RPCRT4! WMSG_ADDRESS::HandleRequest(union _WMSG_MESSAGE *,
	               class WMSG_SASSOCIATION *,struct _RPC_MESSAGE *,
	               class WMSG_ENDPOINT *,int,int) + 146 bytes
	  RPCRT4! WMSG_ADDRESS::DealWithWMSGRequest(union _WMSG_MESSAGE *,
	               class WMSG_ENDPOINT * *,struct HWND__ * *,
	               class WMSG_ASSOCIATION *,union _WMSG_MESSAGE * *) + 734
	               bytes
	  RPCRT4! WMSG_ADDRESS::ReceiveLotsaCalls(void) + 837 bytes
	  RPCRT4! RecvLotsaCallsWrapper(class WMSG_ADDRESS *) + 9 bytes
	  RPCRT4! BaseCachedThreadRoutine(class CACHED_THREAD *) + 156 bytes
	  RPCRT4! ThreadStartRoutine(class THREAD *) + 23 bytes
	  KERNEL32! 77f04f44()
	
	CAUSE
	=====
	
	The OLE functions handling typelib marshaling are not completely multithread
	safe, resulting in a narrow window of opportunity for the exception to take
	place if two or more clients are making concurrent calls to the server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words: 4.00 object linking embedding com dcom distributed
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
