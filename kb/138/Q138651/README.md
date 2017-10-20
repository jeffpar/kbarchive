---
layout: page
title: "Q138651: How to Exclude or Include Vfp300.esl File from Compression"
permalink: /kb/138/Q138651/
---

## Q138651: How to Exclude or Include Vfp300.esl File from Compression

{% raw %}

	Article: Q138651
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Setup Wizard is run for the first time, the "Visual FoxPro Runtime 3.0"
	check box appears unselected in the Step 2 - Optional Components screen. Select
	this check box to compress the Vfp300.esl library file that is needed to run a
	Visual FoxPro application .exe file on another computer. After you select the
	"Visual FoxPro Runtime 3.0" check box the first time, it will be selected by
	default the next time the Setup Wizard is run. The Vfp300.esl library file is
	3,713,213 bytes in size, so you may not want to compress it every time the Setup
	Wizard is run.
	
	MORE INFORMATION
	================
	
	After starting the Setup Wizard to build the disks, you can, in Step 2 -
	Optional Components, clear the "Visual FoxPro Runtime 3.0" check box. This will
	allow the Setup Wizard to build the disks much more quickly due to not having to
	compress the Vfp300.esl library file. Also, there will be fewer disks created
	due to the absence of the Vfp300.esl library file. If the user has already
	installed the disks created with the Vfp300.esl library file earlier, the file
	is already on the computer in the \Windows\System subdirectory. An .exe file
	built in Visual FoxPro automatically looks in the \Windows\System subdirectory
	for the Vfp300.esl library file. Therefore, when you send a user an update of
	your application or a second application, you don't need to include the
	Vfp300.esl library file again. All Visual FoxPro .exe files located on a
	computer can use the same Vfp300.esl library file as long as it is placed in the
	Windows\System subdirectory.
	
	Additional query words: VFoxWin performance speed faster
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
