---
layout: page
title: "Q238897: HOWTO: Preset the Win CE Computer Name"
permalink: /kb/238/Q238897/
---

## Q238897: HOWTO: Preset the Win CE Computer Name

{% raw %}

	Article: Q238897
	Product(s): Microsoft C Compiler
	Version(s): N\A:2.11,2.12; WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows CE Embedded Toolkit for Visual C++ 5.0 
	- Microsoft Windows CE 2.10 Enhancement Pack for Windows CE Embedded Toolkit for Visual C++ 5.0 
	- Microsoft Windows CE Platform Builder, versions 2.11, 2.12 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows CE device name can be set in the base registry file by editing a
	.reg file (that is, Project.reg) to include the following:
	
	     [HKEY_LOCAL_MACHINE\Ident]
	     "OrigName"="WinCE"
	     "Name"="MyCEPC"
	
	Where "MyCEPC" can be a value of your choosing.
	
	Without this change, the default device name is "WinCE" and you must change the
	value in the Control Panel Communications applet.
	
	Adding a preset computer name is useful for testing on the sample CEPC platform
	which cannot be warm-booted to activate changes to the registry.
	
	MORE INFORMATION
	================
	
	The Windows CE Server Message Block (SMB) redirector requires that a unique
	computer name be set before network file system services can be activated. The
	network redirector checks for the existence of the "OrigName" value, and also
	checks that it is not set to the same value as "Name".
	
	Until a name is set, accessing network resources using the UNC naming convention
	(\\ServerName\ShareName) is not possible.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSDKSearch kbWinCEETKSearch kbWinCESDKSearch kbWinCESearch kbWinCESDK211 kbWinCESDK212 kbWinCEEnh210ETKVC500 kbWinCEETKVC500
	Version           : N\A:2.11,2.12; WINDOWS:
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
