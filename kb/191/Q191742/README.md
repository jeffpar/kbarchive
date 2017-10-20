---
layout: page
title: "Q191742: IIS: Access Denied When Trying to Update Files on IIS Computer"
permalink: /kb/191/Q191742/
---

## Q191742: IIS: Access Denied When Trying to Update Files on IIS Computer

{% raw %}

	Article: Q191742
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it
	if a problem occurs. For information about how to do this, view the
	"Restoring the Registry" Help topic in Regedit.exe or the "Restoring a
	Registry Key" Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When you try to save a file on your Internet Information Server (IIS) computer,
	one of the following error messages appears:
	
	  Cannot create file
	
	  -OR-
	
	  Another user or process has modified the file. Do you wish to reload it?
	
	  -OR-
	
	  Access is denied.
	  The file associated with this document has been moved or deleted
	  outside of [third-party application]. You may want to resave the
	  document before continuing.
	
	CAUSE
	=====
	
	The file you are trying to save was recently viewed through IIS. Because IIS
	caches file handles for performance, some editors are unable to close the file.
	
	The editors HomeSite, DreamWeaver, and EditPad are known to generate errors when
	attempting to overwrite cached files.
	
	Microsoft Notepad and Microsoft FrontPage can overwrite cached files without
	error.
	
	WORKAROUND
	==========
	
	To work around this problem, use a different editor or use the Registry Editor
	to disable caching of file handles.
	
	WARNING: Disabling caching of file handles may seriously impact the performance
	of your Internet Information Server computer. Use this workaround with caution.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it. If
	you are running Windows NT, you should also update your Emergency Repair Disk
	(ERD).
	
	1. On the Start menu, click Run. In the Open box, type "regedit" (without the
	  quotation marks). Click OK.
	
	2. In the left pane, click the plus sign (+) to the left of each of the
	  following items (in order):
	
	  HKEY_LOCAL_MACHINE
	     SYSTEM
	        CurrentControlSet
	           Services
	              InetInfo
	                 Parameters
	
	3. In the left pane, click the Parameters key to select it.
	
	4. On the Edit menu, click New and then point to DWORD Value.
	
	5. In the right pane, a new value named "New Value #1" appears.
	
	6. Rename the new value to DisableMemoryCache.
	
	7. Double-click the value DisableMemoryCache. A dialog box appears. Change the
	  Value Data to 1.
	
	8. Click OK.
	
	9. On the Registry menu, click Exit.
	
	Restart the computer to make this setting take effect.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem:
	
	1. Modify and save a file to your IIS server.
	
	2. View the file in a Web browser.
	
	3. Immediately try to modify or save the file again.
	
	For further information, see the following related articles in the Microsoft
	Knowledge Base:
	
	  Q182626, Access Is Denied When Attempting to Put Files on FTP Server
	  Q159199, A File Cannot Be Deleted or Accessed on an NTFS Volume
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: IIS FTP DELETE LOCK 550 cached
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
