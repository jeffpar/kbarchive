---
layout: page
title: "Q308244: NTLM Password Changes Fail After Q299444 &amp; Q310625 Applied"
permalink: kb/308/Q308244/
---

## Q308244: NTLM Password Changes Fail After Q299444 &amp; Q310625 Applied

	Article: Q308244
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to authenticate a client computer against an Internet
	Information Server (IIS) 4.0 server under the following conditions
	
	- You have applied the hotfixes in the following Microsoft Knowledge Base
	  articles:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	  Q301625 MS01-044: Patch Available for SSI Privilege Elevation Vulnerability
	
	- You are using NTLM.
	
	- Your current password is expired.
	
	the server generates the following error:
	
	  HTTP 500 - Internal server error
	
	Or, if you have the friendly error messages turned off, you see the following
	error:
	
	  -2146893055 (0x80090301)
	
	CAUSE
	=====
	
	This behavior occurs because of changes that were made to improve the system
	security that resulted in an adverse affect on the password change process.
	
	WORKAROUND
	==========
	
	To reset or to change the password for your expired user account, you need to
	use User Manager.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Only apply it to systems
	that are experiencing this specific problem. This fix may receive additional
	testing. Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Windows NT service pack that contains this
	fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, visit the following Microsoft
	Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time   Version       Size     File name    Platform
	  -------------------------------------------------------------
	  30-Oct-2001 18:41  4.2.771.1     214,544  ADSIIS.dll   x86
	  30-Oct-2001 18:41  4.2.771.1     330,672  ASP.dll      x86
	  30-Oct-2001 18:40  4.2.771.1      55,392  HTTPODBC.dll x86
	  30-Oct-2001 18:41  4.2.771.1      98,912  IISCHEMA.dll x86
	  30-Oct-2001 18:39  4.2.771.1      63,472  IISLOG.dll   x86
	  30-Oct-2001 18:39  4.2.771.1     185,792  INFOCOMM.dll x86
	  30-Oct-2001 18:39  4.2.771.1      29,520  ISCOMLOG.dll x86
	  30-Oct-2001 18:40  4.2.771.1      38,256  SSINC.dll    x86
	  30-Oct-2001 18:40  4.2.771.1      25,360  SSPIFILT.dll x86
	  30-Oct-2001 18:40  4.2.771.1     229,536  W3SVC.dll    x86
	  30-Oct-2001 18:40  4.2.771.1      88,032  WAM.dll      x86
	
	  Date        Time   Version       Size     File name     Platform
	  -------------------------------------------------------------
	  30-Oct-2001 18:32  4.2.771.1     307,984  ADSIIS.dll    Alpha 
	  30-Oct-2001 18:32  4.2.771.1     552,720  ASP.dll       Alpha 
	  30-Oct-2001 18:31  4.2.771.1      89,360  HTTPODBC.dll  Alpha 
	  30-Oct-2001 18:32  4.2.771.1     107,280  IISCHEMA.dll  Alpha 
	  30-Oct-2001 18:30  4.2.771.1     112,912  IISLOG.dll    Alpha 
	  30-Oct-2001 18:31  4.2.771.1     305,424  INFOCOMM.dll  Alpha 
	  30-Oct-2001 18:30  4.2.771.1      46,352  ISCOMLOG.dll  Alpha 
	  30-Oct-2001 18:31  4.2.771.1      60,688  SSINC.dll     Alpha 
	  30-Oct-2001 18:32  4.2.771.1      39,696  SSPIFILT.dll  Alpha 
	  30-Oct-2001 18:31  4.2.771.1     386,832  W3SVC.dll     Alpha 
	  30-Oct-2001 18:31  4.2.771.1     150,288  WAM.dll       Alpha 
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Internet Information Server
	4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
