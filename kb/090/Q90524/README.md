---
layout: page
title: "Q90524: Installing WFWG over Existing Mail 3.0 and Schedule+ 1.0"
permalink: /kb/090/Q90524/
---

## Q90524: Installing WFWG over Existing Mail 3.0 and Schedule+ 1.0

{% raw %}

	Article: Q90524
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Be cautious when installing Windows for Workgroups over an existing installation
	of Mail 3.0 and Schedule+ version 1.0. Because Windows for Workgroups installs
	Workgroups Mail and Schedule+, existing Mail and Schedule+ files and settings
	may be overwritten.
	
	MORE INFORMATION
	================
	
	Take the following steps to safely install Windows for Workgroups with Mail
	3.0:
	
	NOTE: The following procedure does not work with the SETUP /A and SETUP /N
	options.
	
	1. Start Windows for Workgroups Setup.
	
	2. Choose the Custom Installation option.
	
	3. Continue through Setup until the "Set Up Only Windows Components You Select"
	  check box appears. Select the check box and choose the Continue button.
	
	4. The next screen allows you to choose different components. Choose the Files
	  button on the Accessories line.
	
	5. On the next screen, all accessories will appear under the Install These Files
	  On The Hard Disk list box. From that list box, choose:
	
	  Mail
	  Mail Help
	  Schedule+
	  Schedule+ Help
	
	  Then choose the Remove button.
	
	  All of the above files will appear in the "Do Not Install These Files" list
	  box.
	
	6. Choose the OK button to continue with Setup.
	
	Workgroups Mail and Schedule+ will not install and will not conflict with the
	existing Mail and Schedule+ installations.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
