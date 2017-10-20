---
layout: page
title: "Q255201: Cannot Log On to PDC After Unsuccessful Installation of NDS"
permalink: /kb/255/Q255201/
---

## Q255201: Cannot Log On to PDC After Unsuccessful Installation of NDS

{% raw %}

	Article: Q255201
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you remove an unsuccessful installation of Novell NetWare Directory
	Services on a primary domain controller (PDC) running Microsoft Windows NT
	Server 4.0, you may be unable to log on to the PDC and you may receive an error
	message citing Error C00000DF.
	
	CAUSE
	=====
	
	This behavior can occur when the files Samlib.dll, Samsrv.dll, and Winlogon.exe
	are the incorrect version.
	
	RESOLUTION
	==========
	
	To resolve this behavior, update the relevant files. Follow these steps:
	
	1. Perform a parallel installation, including the same service pack that is
	  installed for the original installation.
	
	2. Start the computer to the parallel installation.
	
	3. Start Windows Explorer, and then view the following files to see whether
	  their date/time stamps are correct for the service pack installed for the
	  original installation of Windows NT:
	
	  Samlib.dll
	
	  Samsrv.dll
	
	  Winlogon.exe
	
	4. Rename any of these files that do not have the correct date/time stamp, and
	  then replace them with copies from the parallel installation.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
