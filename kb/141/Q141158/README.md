---
layout: page
title: "Q141158: Wrkgrp.ini File Not Implemented When Installing from Network"
permalink: /kb/141/Q141158/
---

## Q141158: Wrkgrp.ini File Not Implemented When Installing from Network

{% raw %}

	Article: Q141158
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you place a Wrkgrp.ini file in a shared Windows folder to specify a list of
	workgroups that users can join, the contents of the Wrkgrp.ini file may not be
	implemented.
	
	CAUSE
	=====
	
	Shared Installations
	--------------------
	
	When you are using a shared installation of Windows 95, the contents of the
	Wrkgrp.ini file are implemented only if the file is located in the System folder
	in the shared Windows folder on the network server. If the Wrkgrp.ini file is
	placed in the shared Windows folder, the contents of the file are not
	implemented.
	
	Stand-Alone Installations
	-------------------------
	
	When you install Windows 95 from a shared Windows folder on a network server, but
	choose not to use a shared installation of Windows 95, the contents of the
	Wrkgrp.ini file are implemented only if the file is located in the
	Windows\System folder on your local hard disk. If the Wrkgrp.ini file is placed
	in the shared Windows folder on the network server, it is copied to your Windows
	folder when you install Windows 95 from the network server, not your
	Windows\System folder.
	
	If you place the Wrkgrp.ini file in the System folder in the shared Windows
	folder on the network server, the file is not copied to your Windows\System
	folder when you install Windows 95 from the network server. Therefore, this
	problem occurs with stand-alone installations of Windows 95 even if the
	Wrkgrp.ini file is placed in the System folder in the shared Windows folder on
	the network server.
	
	RESOLUTION
	==========
	
	Shared Installations
	--------------------
	
	If you are using a shared installation of Windows 95, you can work around this
	problem by copying the Wrkgrp.ini file to the System folder in the shared
	Windows folder on the network server.
	
	Stand-Alone Installations
	-------------------------
	
	If you installed Windows 95 from a shared Windows folder on a network server, but
	chose not to use a shared installation of Windows, you can work around this
	problem by copying the Wrkgrp.ini file to the Windows\System folder on your
	local hard disk.
	
	To prevent this problem from occurring with future stand-alone installations of
	Windows 95, you can modify the Msbatch.inf file so that the Wrkgrp.ini file is
	copied to the Windows\System folder on local hard disks. To do so, add the
	following lines to the Msbatch.inf file:
	
	  [Install]
	  CopyFiles=wrkgrp.ini.copy
	
	  [wrkgrp.ini.copy]
	  wrkgrp.ini
	
	  [DestinationDirs]
	  wrkgrp.ini.copy=11
	
	Also, make sure that the following lines are present in the Msbatch.inf file:
	
	  [Version]
	  LayoutFile=Layout.inf
	
	MORE INFORMATION
	================
	
	After you create a shared Windows folder on a network server from which users
	can install Windows 95, users can create their own shared installation or
	stand-alone installation of Windows 95. When a shared installation of Windows 95
	is used, each user has a separate folder that contains the specific
	configuration information for his or her computer. The remainder of the Windows
	files are found in the shared Windows folder on the network server.
	
	When a stand-alone installation of Windows 95 is used, all the Windows files are
	copied to the user's local hard disk. Even though Windows is installed from the
	network server, Windows does not need any files from the network server to run.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
