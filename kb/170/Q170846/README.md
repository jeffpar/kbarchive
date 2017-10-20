---
layout: page
title: "Q170846: Computer or Workgroup Name Not Set Properly Using Msbatch.inf"
permalink: /kb/170/Q170846/
---

## Q170846: Computer or Workgroup Name Not Set Properly Using Msbatch.inf

{% raw %}

	Article: Q170846
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbsetup win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to use an Msbatch.inf file to set the computer name or
	workgroup name during a batch installation of Windows 95 and you specify the
	name using a variable, the name may be set to the variable itself instead of the
	value the variable is intended to represent.
	
	CAUSE
	=====
	
	This problem occurs because the values assigned to the ComputerName and
	WorkGroup parameters in the Msbatch.inf file do not need to be enclosed in
	quotation marks and because the percent character (%) is a valid character in
	workgroup and computer names in Windows 95. Therefore, when you use an
	Msbatch.inf file to set the computer name or workgroup name, the Windows 95
	Setup program cannot distinguish between percent characters used to enclose
	variable names and percent characters intended to be included in the computer
	name or workgroup name.
	
	MORE INFORMATION
	================
	
	When you use an Msbatch.inf file to set the computer name or workgroup name, the
	name must be unique for each computer on the network and should be no more than
	15 characters in length. It cannot contain spaces, but it can contain the
	following characters:
	
	  ! @ # $ % ^ & ( ) - _ ' { } . ~
	
	If you define a variable in an Msbatch.inf file and then use the variable with
	the ComputerName or WorkGroup parameter, the Windows 95 Setup program assumes
	that the percent characters should be included in the computer name or workgroup
	name. For example, an Msbatch.inf file may contain lines similar to the
	following:
	
	  [Network]
	  ComputerName=%cname%
	
	  [Strings]
	  cname="MyComputerName"
	
	If you use this Msbatch.inf file during a batch installation of Windows 95, the
	computer name is set to %cname% instead of MyComputerName.
	
	REFERENCES
	==========
	
	For additional information about using an Msbatch.inf file for batch
	installations of Windows 95, see Appendix D in the Microsoft Windows 95 Resource
	Kit.
	
	Additional query words: automate assign
	
	======================================================================
	Keywords          : kbsetup win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
