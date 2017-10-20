---
layout: page
title: "Q134311: PRB: Error Type -192 on 68K Macintosh"
permalink: /kb/134/Q134311/
---

## Q134311: PRB: Error Type -192 on 68K Macintosh

{% raw %}

	Article: Q134311
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A type -192 error is received. The actual text of the error messages received
	may vary depending on what is causing the error.
	
	If a FoxPro PPC executable created by the user or by FoxPro is installed on a 68K
	Macintosh and double-clicked, the following error message appears:
	
	  The application program "<name of program>" could not be opened,
	  because an error of type -192 occurred.
	
	Double-clicking an Application (.APP) file created with FoxPro for Macintosh and
	installed on a 68K Macintosh using distribution disks created with the FoxPro
	Setup Wizard results in this error:
	
	  The application program "FoxPPC26.ESL" could not be opened,
	  because an error of type -192 occurred.
	
	CAUSE
	=====
	
	These errors are caused by trying to run native PPC code on a 68k Macintosh.
	
	In the case of the second error message, it is specifically caused by having the
	FoxPPC26.ESL file installed with the application on a 68K Macintosh. The
	application file finds the FoxPPC26.ESL file before it finds the FoxMac26.ESL
	file, which is the support library that the application needs to use.
	
	WORKAROUND
	==========
	
	In the case of the PPC version of FoxPro itself or a user-created PPC EXE file
	installed on a 68K Macintosh, remove the program file and install a 68K
	version.
	
	In the case of a distributed application returning this error message, there are
	at least three possible solutions:
	
	
	- Manually delete the FoxPPC26.ESL file and empty the Trash.
	
	-or-
	
	- Build a 68K .EXE file instead. The support library is built into the .EXE
	  file and the .ESL files do not need to be distributed with it. The Setup
	  Wizard will, however, provide the option of including the support libraries
	  on the distribution diskettes. This question should be answered "No" unless
	  there is a specific reason to include the support libraries with the .EXE
	  file.
	
	-or-
	
	- Modify the Setup Wizard to exclude the FoxPPC26.ESL file on distribution
	  disks. This option is useful if the application is not going to be installed
	  on PowerMacs. Or you can use two different versions of the Setup Wizard to
	  build disks specific to the type of Macintosh the application is to be
	  installed on, PowerMac or 68K Mac. The steps to modify the Setup Wizard are
	  as follows:
	
	  NOTE: This option is for experienced developer's only. Microsoft Product
	  Support doesn't support custom changes to the Setup Wizard.
	
	  1. Make a copy of the entire DK Wizard folder that is found in the FoxPro
	     folder. Put it in a safe place.
	
	  2. In FoxPro, open the Setup.pjx project found in the DK Wizard folder.
	
	  3. Edit the Required table/dbf that will be listed in the project.
	
	  4. Ensure that the last record in the Required table has FoxPPC26.esl in the
	     Name field. Mark that record for deletion, and Pack the table.
	
	  5. Rebuild the Setup.app, making sure to replace the original one that is
	     found in the main FoxPro folder.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The FoxPro version 2.6 setup program (for FoxPro itself, not the setup used by
	the Distribution Kit), when run on a 68K Macintosh, only allows installation of
	the 68k version or the combined 68K/PPC version. Both will run on a 68K Mac.
	
	It is possible that an original 68K Macintosh may have a PowerPC board installed
	in it. If the FoxPro setup program is run while the PPC board is active, the PPC
	version only of FoxPro could be installed. If the PPC board is disabled and the
	Macintosh is hence converted back into a 68K Macintosh, the Type -192 error will
	be received when starting the PPC version of FoxPro.
	
	Install the combined version on a Macintosh with a PPC board if there is a
	possibility that the board will be disabled at some point.
	
	In order for an Application file to run on a computer that doesn't have FoxPro
	installed on it, at least one of the FoxPro support libraries needs to be on the
	computer. Preferably the support library should be in the same folder as the
	FoxPro application. The names of the two support libraries are FoxMac26.ESL and
	FoxPPC26.ESL, with the later file being the one for use on a PowerMac. The
	FoxMac26.ESL will also run on a PowerMac but the FoxPPC26.ESL will not run on a
	68K Macintosh.
	
	Additional query words: 3.00 vFoxMac FoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	
	=============================================================================
	

{% endraw %}
