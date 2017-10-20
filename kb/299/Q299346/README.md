---
layout: page
title: "Q299346: Windows 2000 Resource Kits Include Wrong Files"
permalink: /kb/299/Q299346/
---

## Q299346: Windows 2000 Resource Kits Include Wrong Files

{% raw %}

	Article: Q299346
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows 2000 Server Resource Kit ISBN 1-57231-805-8 
	- MSPRESS Microsoft Windows 2000 Professional Resource Kit ISBN 1-57231-808-2 
	- MSPRESS Microsoft Windows 2000 Server Resource Kit Supplement One ISBN 0-7356-1279-x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following files on the Windows 2000 Resource Kits may produce error
	messages.
	
	- REPORTGEN.EXE
	
	- WINS.DLL
	
	MORE INFORMATION
	================
	
	REPORTGEN.EXE
	-------------
	
	When you attempt to run the tool REPORTGEN.EXE you may receive the following
	error:
	
	  Program too big to fit in memory
	
	Microsoft has released an update to resolve the issue. The updated version of the
	REPORTGEN.EXE file is available at the following FTP location:
	
	  ftp://ftp.microsoft.com/reskit/win2000/
	
	WINS.DLL
	--------
	
	When you set up the WINS Replication Parser DLL according to the Windows 2000
	Resource Kit instructions, you may receive a system message indicating that
	WINS.DLL is not a valid Windows file.
	
	Microsoft has released an update to resolve the issue. The updated version of the
	WINS.DLL file is available on Supplement One of the Windows 2000 Server Resource
	Kit, and also from the following FTP location:
	
	  ftp://ftp.microsoft.com/reskit/win2000/
	
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: rkbook reskit tools resource kit W2K Server
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
