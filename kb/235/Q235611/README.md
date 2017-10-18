---
layout: page
title: "Q235611: IIS 3.0 May Stop Responding to Client Requests"
permalink: kb/235/Q235611/
---

## Q235611: IIS 3.0 May Stop Responding to Client Requests

	Article: Q235611
	Product(s): Internet Information Server
	Version(s): winnt:3.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Internet Information Server (IIS) 3.0 may stop responding to client requests,
	making it necessary to stop and restart the IIS 3.0 services.
	
	CAUSE
	=====
	
	When IIS 3.0 attempts to close a socket it first shuts down the connection,
	notifying the client that it is closing its side of the connection. While in
	this state, it is still possible for the client to continue to send data.
	Currently, there is no time-out, creating the possibility for a misbehaving
	client program to keep the connection's Web services open indefinitely. If this
	occurs while IIS 3.0 is cleaning up the connection, all other client requests
	are queued up. This eventually causes IIS 3.0 to stop responding to any client
	request.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
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
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  05/11/99  02:11p               130,320 Infocomm.dll  x86
	  05/11/99  02:10p               222,992 Infocomm.dll  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbiisSearch kbiis300
	Version           : winnt:3.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
