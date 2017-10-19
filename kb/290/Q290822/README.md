---
layout: page
title: "Q290822: Continuous RPC Error When an Out-of-Process MTX Ends"
permalink: /kb/290/Q290822/
---

## Q290822: Continuous RPC Error When an Out-of-Process MTX Ends

	Article: Q290822
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbDSupport
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an out-of-process application ends, either because the application crashes
	or because you use the mtxstop command, the next request to that application
	results in a remote procedure call (RPC) error, as expected. When this occurs,
	the RPC service returns an RPC error to Internet Information Server (IIS), which
	IIS passes on to the client.
	
	Although one of several RPC errors can occur, the RPC_S_CALL_FAILED error is
	usually returned. In this case, IIS traps for that error and cleans up
	references to the out-of-process application; thus, subsequent requests for that
	application start a new MTX.
	
	However, when the RPC_S_SERVER_UNAVAILABLE error is returned, IIS 4.0 does not
	trap for this error; thus, the references are never cleaned up, and a new MTX is
	not started. As a result, IIS continuously gives the clients an "RPC Server
	unavailable" error until the Web service is restarted.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	Date      Time      Version       Size    File name     Platform
	----------------------------------------------------------------
	4/4/2001  9:15:52AM 4.2.762.1     214,544 Adsiis.dll    x86
	4/4/2001  9:15:54AM 4.2.762.1     330,672 Asp.dll       x86
	4/4/2001  9:15:54AM 4.2.762.1     55,904  Httpodbc.dll  x86
	4/4/2001  9:15:54AM 4.2.762.1     98,912  Iischema.dll  x86
	4/4/2001  9:15:56AM 4.2.762.1     63,472  Iislog.dll    x86
	4/4/2001  9:15:58AM 4.2.762.1     185,792 Infocomm.dll  x86
	4/4/2001  9:15:58AM 4.2.762.1     29,520  Iscomlog.dll  x86
	4/4/2001  9:17:28AM 4.2.762.1     38,256  Ssinc.dll     x86
	4/4/2001  9:17:28AM 4.2.762.1     25,360  Sspifilt.dll  x86
	4/4/2001  9:17:30AM 4.2.762.1     229,024 W3svc.dll     x86
	4/4/2001  9:17:34AM 4.2.762.1     88,032  Wam.dll       x86
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	Additional query words: go goes away shut shuts down repeatedly
	
	======================================================================
	Keywords          : kbDSupport 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
