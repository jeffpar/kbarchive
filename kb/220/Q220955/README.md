---
layout: page
title: "Q220955: Using System Policies to Hide Specific Drive Letters"
permalink: /kb/220/Q220955/
---

## Q220955: Using System Policies to Hide Specific Drive Letters

{% raw %}

	Article: Q220955
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With system policies in Windows NT 4.0, you can use the "Hide All Drives in My
	Computer" option in Windows NT 4.0 system policies to hide all drives from a
	specified user. However, you may want to hide some drives but retain access to
	others. You can do this using a feature of Microsoft Zero Administration Kit
	(ZAK) for Windows NT (you can also implement this feature using the Common.adm
	file in a system policy).
	
	MORE INFORMATION
	================
	
	Using the Common.adm Files Included with Windows NT
	---------------------------------------------------
	
	This policy shows only specified drives on the client computer. The registry key
	that this policy affects uses a decimal number that corresponds to a 26-bit
	binary string, with each bit representing a drive letter:
	
	  11111111111111111111111111
	  ZYXWVUTSRQPONMLKJIHGFEDCBA
	
	This configuration corresponds to 67108863 in decimal and hides all drives. For
	example, if you want to hide drive C, make the third-lowest bit a 1 (this is
	displayed in binary as 0000000000000000000000100), and then convert the binary
	string to decimal, which comes out to a decimal value of 4.
	
	1. Open the Common.adm file in a text editor and locate the following section:
	
	  CATEGORY !!Shell
	  	CATEGORY !!Restrictions
	  		POLICY !!HideDrives
	  		VALUENAME "NoDrives"
	  		VALUEON NUMERIC 67108863	; low 26 bits on (1 bit per drive)
	  		END POLICY
	
	2. Replace the VALUEON NUMERIC value with the new value you created.
	
	3. Save the file and quit.
	
	4. Start Policy Editor, and then click to select the "Hide All Drives in My
	  Computer" check box. Only the drives specified in the VALUEON NUMERIC value
	  are hidden.
	
	Sample VALUEON NUMERIC values:
	
	- 67108863=hide all drive letters (default)
	
	- 67108859=hide all drive letters but C
	
	- 66060287=hide all drive letters but U
	
	- 66060283=hide all drive letters but C and U
	
	- 66043899=hide all drive letters but C, O, and U
	
	- 00000004=hide only drive C
	
	These values are written to the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer
	
	Using ZAK
	---------
	
	Using the ZAK .adm file, you can restrict access to specific drive letters. The
	following list shows the built-in options:
	
	- Hide all drive letters
	
	- Hide all drive letters but C
	
	- Hide all drive letters but U
	
	- Hide all drive letters but C and U
	
	- Hide all drive letters but C, O, and U
	
	You can expand this list and add your own drive letter restrictions, and then
	make it available as a menu item in Policy Editor.
	
	To add your own drive restrictions, use the following steps:
	
	1. Open the Zakwinnt.adm file in a text editor and locate the following section:
	
	  CATEGORY !!Shell
	  	CATEGORY !!Restrictions
	  		POLICY !!HideDrives
	  		VALUENAME "NoDrives"
	  		ITEMLIST NAME !!HideDrives_all  ; low 26 bits on (1 bit per drive)
	  		END POLICY
	
	2. Append to the ITEMLIST NAME value with the new value you created.
	
	3. At the end of the Zakwinnt.adm file (under the [Strings] section), add a line
	  so the new item is displayed as a menu option in Policy Editor. The last line
	  is added to correspond with the new line in the HideDrives section.
	
	  Drives="Drives"
	  Restrictions="Restrictions"
	  HideDrives="Show only selected drives"
	  HideDrivesOptions="Choose drives that will be shown"
	  HideDrives_all="Do not show any drives"
	  HideDrives_C="Only drive C"
	  HideDrives_U="Only drive U"
	  HideDrives_CU="Drives C and U"
	  HideDrives_COU="Drives C, O and U"
	  HideDrives_ONLYC="All drives but C"
	
	4. Save the file and quit.
	
	5. Open Policy Editor and click to select the "Hide All Drives in My Computer"
	  check box. Only the drives specified by the number in ITEMLIST NAME are
	  hidden.
	
	In Policy Editor, locate the ZAK Policies\Windows NT\Drives\Restrictions folder
	and click Show Only Selected Drives. A new item called "All drives but C," is
	displayed, which restricts access to drive C but no other drives.
	
	REFERENCES
	==========
	
	For additional information, please click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q231289 Using Group Policy Objects to Hide Specified Drives
	
	Additional query words: poledit
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
