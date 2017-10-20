---
layout: page
title: "Q142064: RPC Authentication Option Under Windows NT"
permalink: /kb/142/Q142064/
---

## Q142064: RPC Authentication Option Under Windows NT

{% raw %}

	Article: Q142064
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discuss the authentication options available under Windows NT for a
	RPC Client-Server application.
	
	MORE INFORMATION
	================
	
	Currently there are two methods that can be used to add security to a RPC
	Client-Server application.
	
	Microsoft RPC can use the security features of Windows NT which are built into
	the name pipes (ncacn_np) and local RPC (ncalrpc) transports. However this
	restrict the application to use only one of the two listed transports. To
	impersonate the remote client Using Name Pipes as the RPC "Protocol Sequence",
	The server-side process simply calls the Win32 RpcImpersonateClient() function.
	This function resolves through the RPC runtime to an ImpersonateNamePipeClient()
	call. To un-ipmersonate the client the RPC server-side process simply call the
	RpcRevertToSelf() function. The function will resolve through the RPC runtime to
	RevertToSelf() call.
	
	The other option is to use an RPC accessible Security Package for "Authenticated
	RPC", This form of security is transport independent, so your application can
	use other transports in addition to the named pipes and local RPC. Currently the
	only security packaged supported in Windows NT is the Windows NT Security
	service.
	
	On client systems you can use the RPC security by including the
	RpcBindingSetAuthInfo() call in the client program. This routine places the
	client identity information into the binding handle which is passed to the
	server as the first parameter in a remote procedure call. Servers extract the
	client authentication information from the client binding handle using the
	RpcBindingInqAuthClient() call. This will identify the authentication service to
	be used (Windows NT Security service only) and the authentication level
	desired.
	
	The server system supplies its identity information to the client by registering
	itself with RpcServerRegisterAuthInfo() call. Clients or other servers can
	extract this information to authenticate the server identity. Use the
	RpcBindingInqAuthInfo() call to extract the server authentication from the
	server binding handle.
	
	Generally the transport level security built into the named pipes and local RPC
	does not necessarily add lots of new code to an application, However if you want
	to use security over transport other then named pipes and Local RPC ( For
	Instance TCP/IP or IPC/SPX), you must use the RPC security features which can
	require extra programming overhead.
	
	
	Additional query words: prodnt 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	

{% endraw %}
