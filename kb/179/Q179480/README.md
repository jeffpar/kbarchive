---
layout: page
title: "Q179480: FIX: Temp Environment Variable Causes Unusual Behavior in VFP"
permalink: /kb/179/Q179480/
---

## Q179480: FIX: Temp Environment Variable Causes Unusual Behavior in VFP

{% raw %}

	Article: Q179480
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbvfp
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you attempt to start Visual FoxPro, one of the following occurs:
	
	- The Desktop does not appear.
	
	  -or-
	
	- The standard toolbar floats across the Windows NT desktop.
	
	  -or-
	
	- The Visual FoxPro Command window floats across the Windows NT desktop.
	
	  -or-
	
	- Visual FoxPro causes a memory exception error.
	
	CAUSE
	=====
	
	Setting the Temp environment variable to any two directories separated by a
	semicolon (;).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	WARNING: Attempting the following steps may adversely impact some 32-bit
	applications and necessitate uninstalling then re-installing any affected
	applications. Specifically, attempting the following steps with Visual FoxPro
	5.0x on a Windows NT 4.0 machine results in an abnormal start up of Visual
	FoxPro 5.0x after the Temp variable in the User Variables list has been reset to
	a solitary directory. To correct this problem, click Start, Run, and enter
	"C:\Program Files\Devstudio\Vfp\Vfp.exe" -A at the prompt. Visual FoxPro 5.0x
	may then be started normally from the Start Menu or from a shortcut. However, if
	this method fails, it is necessary to uninstall and re-install Visual FoxPro
	5.0x.
	
	1. In Windows NT 4.0, open Control Panel and double-click the System icon to
	  open the System Properties dialog box. Click the Environment tab.
	
	2. Select the Temp variable in the User Variables list. In the Value text box,
	  add a second folder to the Value of the Temp variable. Here is an example:
	
	  If the variable's value is: %SystemDrive%\TEMP
	
	  Change it to: %SystemDrive%\TEMP;%SystemDrive%\Tmp
	
	  The second folder can be any name.
	
	3. Press the Apply button and then click OK to close the dialog box.
	
	4. Start Visual FoxPro 3.0x or 5.0x. One of the behaviors described in the
	  SYMPTOMS section occurs.
	
	5. Quit Visual FoxPro 3.0 or 5.0x.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix kbpending
	
	=============================================================================
	

{% endraw %}
