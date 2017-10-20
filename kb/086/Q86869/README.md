---
layout: page
title: "Q86869: Windows 3.1x WIN87EM.DLL Patch for Intel 80387"
permalink: /kb/086/Q86869/
---

## Q86869: Windows 3.1x WIN87EM.DLL Patch for Intel 80387

{% raw %}

	Article: Q86869
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): kbfile kbhw win31 kbHardware kbgraphxlinkcritical
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The WW0548.EXE file contains a revised Windows WIN87EM.DLL file. You must be
	using Windows version 3.1 to use this dynamic-link library (DLL) file. If you
	have a version of Windows earlier than 3.1, you do not need to replace your
	current WIN87EM.DLL file. You also do not need to replace your WIN87EM.DLL file
	unless you are using the Intel 80387 math coprocessor. The Intel 80486DX and
	80486DX2 processors do not require the new file.
	
	Installation
	------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Ww0548.exe now
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	1. Download the WW0548.EXE file from the Microsoft Download Center.
	
	2. Double-click the WW0548.EXE file to extract its contents.
	
	3. Exit Windows. The WIN87EM.DLL file that you will be replacing is used by
	  Windows and, therefore, cannot be updated while you are running Windows.
	
	4. Copy the WIN87EM.DLL file to your Windows\System folder.
	
	5. Restart your computer.
	
	The new WIN87EM.DLL file has now been installed and will be used by Windows upon
	restarting.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kbfile kbhw win31 kbHardware kbgraphxlinkcritical 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : :3.1,3.11
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
