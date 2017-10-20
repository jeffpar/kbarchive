---
layout: page
title: "Q259928: PRB: REPLACE Command Runs Slowly When Applied to a Remote Table"
permalink: /kb/259/Q259928/
---

## Q259928: PRB: REPLACE Command Runs Slowly When Applied to a Remote Table

{% raw %}

	Article: Q259928
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbOSWinNT kbRegistry kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a REPLACE ALL statement (or a REPLACE statement that affects a very large
	number of records in a table) is applied to a relatively large table that
	resides on a remote computer and the network is Microsoft Windows NT-based and
	uses the Transmission Control Protocol/Internet Protocol (TCP/IP) protocol, the
	statement may take a very long time to complete.
	
	RESOLUTION
	==========
	
	Do not permit the redirector to use the cache manager to cache the contents of
	files. This is accomplished by disabling the UtilizeNtCaching startup parameter
	for the Workstation Service.
	
	IMPORTANT: This article contains information about modifying the registry. Before
	you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	You can modify the startup parameters for the Workstation Service by using the
	Registry Editor. Unless otherwise indicated, these value entries are located in
	the following Registry path:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters
	
	Move to this Registry path and add the following value if it is not already
	there:
	
	+--------------------------------+
	| Value Name: | UtilizeNtCaching | 
	+--------------------------------+
	| Data Type:  | REG_DWORD        | 
	+--------------------------------+
	| Data:       | 0                | 
	+--------------------------------+
	| Radix:      | Hex              | 
	+--------------------------------+
	
	After making this change, you must restart the computer.
	
	NOTE: Disabling Windows NT caching may result in a performance decrease with some
	applications.
	
	MORE INFORMATION
	================
	
	The REPLACE statement appears to execute at an acceptable rate for about the
	first 25 percent of the records that are replaced. After that, however, no
	replacements occur for a minute or more. From this point on, replacements occur
	in spurts between long time delays until all of the replacements have
	completed.
	
	The UtilizeNtCaching parameter is enabled by default. This parameter indicates
	whether the redirector uses the cache manager to cache the contents of files.
	Disable this parameter only to guarantee that all data is flushed to the server
	immediately after it is written by the application.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a table that is at least 350 MB in size and ensure that it resides on
	  a remote PC that uses Windows NT 4.0.
	
	2. From your local PC, execute a REPLACE ALL statement from the Visual FoxPro
	  Command window. Make this statement replace one field with one value on the
	  table that you created in step 1.
	
	NOTE: You may be able to achieve further performance improvements by using the
	SYS(3050) function. See the "References" section for articles providing more
	information on this function.
	
	REFERENCES
	==========
	
	For additional information on NT registry entries, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q102981 Workstation Service Entries
	
	  Q163401 How to Disable Network Redirector File Caching
	
	For additional information on the SYS(3050) function, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q176483 PRB: Large Amounts of RAM Seem to Process Data Slowly
	
	  Q190312 PRB: 'Computer Not Responding' When Certain Commands Issued
	
	  Q129311 Visual FoxPro Has 3 New SYS Functions Related to Memory
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbOSWinNT kbRegistry kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
