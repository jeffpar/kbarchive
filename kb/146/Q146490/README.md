---
layout: page
title: "Q146490: Unable to Install New Fonts from the Windows 95 Fonts Folder"
permalink: kb/146/Q146490/
---

## Q146490: Unable to Install New Fonts from the Windows 95 Fonts Folder

	Article: Q146490
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbinterop kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you dual boot between Windows 95 and Windows NT 4.0 and attempt to add fonts,
	the Fonts directories for both WINDOWS and %SystemRoot% are not available in the
	Folders list of Add Fonts.
	
	NOTE: Both Fonts directories are viewable using Windows 95 Explorer and Windows
	NT Explorer.
	
	CAUSE
	=====
	
	When you click Install New Font from the File menu of the Control Panel Fonts
	tool, the Add Fonts dialog box appears. This dialog box uses the FileOpen
	function of the previous version of Windows NT. Directories with Hidden and
	System directory attributes are not listed. By default, the Fonts directories of
	WINDOWS and %SystemRoot% have the System directory attribute.
	
	RESOLUTION
	==========
	
	If you want to import Windows 95 fonts from the WINDOWS directory:
	
	1. Create a network share for the Windows\Fonts directory using Windows NT
	  Explorer (For example, FONTS).
	
	2. In the Control Panel Fonts tool, click Install New Font from the File menu.
	
	3. Click Network, and type the UNC network path name (For example, \\<My
	  Computer>\FONTS).
	
	4. After the font names are retrieved, select the one or multiple fonts you want
	  to import and click OK.
	
	MORE INFORMATION
	================
	
	The WINDOWS directory may have a Read-only attribute in addition to the default
	System attribute. The following table lists the different types of folders the
	Fonts directory becomes if specific directory attributes are added or removed:
	
	  System   Read-only   Type of Folder
	  ------   ---------   --------------
	    No         No      Normal Shell folder
	   Yes         No      Font folder
	    No        Yes      Font folder
	   Yes        Yes      Font folder
	
	The Font folder directories are not viewable in the Add Fonts dialog box. If a
	directory is a normal shell folder, the fonts are viewable. However, the removal
	of the System directory attribute is not recommended.
	
	In addition, if Desktop.ini is removed from the Fonts directory, or the CLSID
	line in Desktop.ini is changed, the symptom mentioned above occurs.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
