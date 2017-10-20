---
layout: page
title: "Q139060: Cannot Resolve TCP/IP Names with 32-Bit Programs"
permalink: /kb/139/Q139060/
---

## Q139060: Cannot Resolve TCP/IP Names with 32-Bit Programs

{% raw %}

	Article: Q139060
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you use the TCP/IP protocol with a server-based installation of Windows 95,
	you may be unable to resolve TCP/IP names when you are using 32-bit programs.
	This problem is known to occur when a DNS or WINS server is used to resolve
	TCP/IP names, or when a HOSTS or LMHOSTS file is used. The problem does not
	occur with 16-bit programs.
	
	CAUSE
	=====
	
	When you install the TCP/IP protocol, Windows 95 creates a new value called
	HelperDllName under the following registry key:
	
	  Hkey_Local_Machine\System\CurrentControlSet\Services\VxD\Mstcp\ 
	  Parameters\Winsock
	
	Windows 95 also creates a new value called ProviderPath under the following
	registry key:
	
	  Hkey_Local_Machine\System\CurrentControlSet\Services\VxD\Mstcp\ 
	  ServiceProvider
	
	Both of these registry values are given the following value:
	
	  %windir%\system\wsock32.dll
	
	This value causes Windows 95 to look for the Wsock32.dll file in your personal
	Windows\System folder on your local hard disk, the network server, or a floppy
	disk. However, when you are using a server-based installation of Windows 95, the
	Wsock32.dll file is located in the System folder in the shared Windows folder on
	the network server.
	
	If Windows 95 is unable to locate the Wsock32.dll file, it is unable to resolve
	TCP/IP names when you use 32-bit programs that require TCP/IP name resolution.
	
	RESOLUTION
	==========
	
	To resolve this problem, use one of the following methods:
	
	- Create a System folder in your personal Windows folder, and then copy the
	  Wsock32.dll file from the System folder that is in the shared Windows folder
	  on the network server to the new folder.
	
	  NOTE: If you are a network administrator and you are implementing this
	  workaround on multiple server-based installations of Windows 95, you must
	  create a System folder in each user's personal Windows folder, and then copy
	  the Wsock32.dll file to each of the new System folders.
	
	- NOTE: For information about how to edit the registry, view the Changing Keys
	  And Values online Help topic in Registry Editor (Regedit.exe). Note that you
	  should make a backup copy of the registry files (System.dat and User.dat)
	  before you edit the registry.
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	  resulting from the incorrect use of Registry Editor can be solved. Use
	  Registry Editor at your own risk.
	
	  Modify the registry entries listed earlier in this article so that the values
	  for HelperDllName and ProviderPath are set to the correct path for the
	  Wsock32.dll file. For example, if the shared Windows folder on the network
	  server is called Winnet, and the network server is mapped as drive F, the
	  HelperDllName and ProviderPath values should be given the following value:
	
	  f:\winnet\system\wsock32.dll
	
	  NOTE: This workaround is not preferred. The next time you add or remove a
	  network component, the new value may be replaced with the original value.
	
	- To prevent this problem from occurring with future installations of Windows
	  95, modify the Nettrans.inf file so that the HelperDllName and ProviderPath
	  registry values are given the correct value when you install Windows 95 from
	  the network server.
	
	  NOTE: Microsoft does not encourage or support changes to .inf files, and
	  Microsoft Product Support Services (PSS) does not support this procedure.
	  Although we have tested the following procedure and it appears to function as
	  described, you should make a backup copy of your .inf file before you
	  proceed.
	
	  To modify the Nettrans.inf file so that this problem does not occur when you
	  install Windows 95 from the network server, open the file in any text editor
	  and replace both instances of "%windir%" with "%25%" (without quotation
	  marks). Save the file, and then copy it to the shared Windows folder on the
	  network server, and to the Inf and Suwin folders in the shared Windows folder
	  on the network server.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: sbs diskless
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
