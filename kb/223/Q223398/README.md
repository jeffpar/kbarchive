---
layout: page
title: "Q223398: Warning Error ID:101 Changes Text in the Japanese Version of IIS"
permalink: /kb/223/Q223398/
---

## Q223398: Warning Error ID:101 Changes Text in the Japanese Version of IIS

{% raw %}

	Article: Q223398
	Product(s): Internet Information Server
	Version(s): winnt:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Japanese language version of Windows NT on a computer running
	IIS 3.0, an Event ID:101 occurs for the FTP service. A message similar to the
	following is logged in the event log:
	
	  The server was unable to add the virtual root '/test' for the directory
	  'c:\test' due to the following error: "error about the directory occurred
	  were described properly in is indicated." The data is the error code.
	
	After you apply Service Pack 4, when the Event ID:101 occurs for the FTP service,
	a message similar to the following is logged in the event log:
	
	  FTP server couldn't initialize a socket. This data is a error.
	
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
	
	  
	
	  Date      Time                 Size    File name     Platform
	  -------------------------------------------------------------
	  03/18/99  1:54:29             67.5KB   Ftpsvc2.dll   x86
	
	  03/18/99  1:54:29             64  KB   Ftpsvc2.dll   alpha   
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in IIS 3.0.
	
	MORE INFORMATION
	================
	
	This problem only occurs when you install the Windows NT 4.0 SP4 Japanese
	language version to a computer running the Japanese language versions of Windows
	NT 4.0 SP3 and IIS 3.0. This does not apply to IIS 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300
	Version           : winnt:3.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
