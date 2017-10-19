---
layout: page
title: "Q201031: PRB: Changes to ASP Scripts Are Not Reflected on IIS 3.0 Server"
permalink: /kb/201/Q201031/
---

## Q201031: PRB: Changes to ASP Scripts Are Not Reflected on IIS 3.0 Server

	Article: Q201031
	Product(s): Internet Information Server
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbASP kbGrpDSASP kbDSupport kbIIS kbiis300
	Last Modified: 22-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changes made to an ASP Script (then saved) are not reflected in the browser when
	refreshed.
	
	CAUSE
	=====
	
	This behavior occurs if there is a long file name in the path to the ASP Script.
	The long file name can be a directory name, or the name of the ASP file itself.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use 8-character DOS naming conventions when naming ASP
	files, or directories in which ASP files reside.
	
	STATUS
	======
	
	This problem was corrected in Windows 2000.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create the following ASP Script and name the file "long file.asp":
	
	     <%@ LANGUAGE="VBSCRIPT"%>
	     <HTML>;
	     <BODY>
	     The current system time is:  <%=Now() %>
	     </BODY>
	     </HTML>
	
	2. Place the file on an IIS 3.0 server and bring the file up in a browser
	  window. For example:
	
	  http://servername/longfi~1.asp
	
	3. Edit "long file.asp" with the following:
	
	     <%@ LANGUAGE="VBSCRIPT"%>
	     <HTML>
	     <BODY>
	     The current system date is:  <%=Date()%>
	     </BODY>
	     </HTML>
	
	4. Save your changes, then refresh your browser window. The changes made to the
	  script will not be reflected.
	
	5. Rename "long file.asp" to "short.asp"
	
	6. Bring up "short.asp" in the browser window. For example:
	
	  http://servername/short.asp
	
	7. The results display "The current system date is: 7/15/98" (with the current
	  system date).
	
	8. Edit "short.asp" and change the script back to the original script that
	  displayed the system time.
	
	9. Refresh the browser window. The changes will be reflected.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbASP kbGrpDSASP kbDSupport kbIIS kbiis300 
	Technology        : kbiisSearch kbiis300
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	
