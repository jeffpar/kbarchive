---
layout: page
title: "Q130219: PC WRmt: PORT COM&lt;n&gt; in Script Does Not Override MSMAIL.INI"
permalink: kb/130/Q130219/
---

## Q130219: PC WRmt: PORT COM&lt;n&gt; in Script Does Not Override MSMAIL.INI

	Article: Q130219
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you select a modem script (for example, USGNERIC or USVSER96) on a port other
	than COM1, and then select a modem script that has the command PORT COM<n>
	to select the communications port (for example, HIGHSP11) via the Communications
	dialog box with Microsoft Mail Remote for Windows, Mail Remote for Windows will
	still try to use the communications port selected by the previous script.
	
	CAUSE
	=====
	
	The MSMAIL.INI still has the following entry:
	
	  [SFSRemote]
	  DefaultPort=COM<n>
	
	where <n> was set by the script that allows a port selection.
	
	This entry is not overridden by the command PORT COM <n> provided by the
	non-selectable communications port script file.
	
	RESOLUTION
	==========
	
	There are three procedures to resolve this:
	
	Procedure A:
	
	  Modify the DefaultPort=COM<n> setting in the MSMAIL.INI to reflect the
	  communications port the modem is now connected to.
	
	Procedure B:
	
	1. From the Mail menu, choose Communications. Select the USGNERIC (US-Generic
	  Modem) script.
	
	2. Change to the proper communications port, and click OK. This will write the
	  changes to the MSMAIL.INI.
	
	3. From the Mail menu, choose Communications. Select the script that does not
	  have a selectable communications port option.
	
	Procedure C:
	
	1. Using Notepad or any text editor, edit the .MDM file (or MoDeM text file) for
	  the script in question.
	
	2. Remark out any PORT COM<n> statements in the .MDM file with a semicolon
	  (;), and save the changes.
	
	3. Using the MS-DOS RENAME command, rename the original .SCR file in the
	  \WINDOWS\MSMAIL\MSRMT\GLB directory to .OLD.
	
	4. Recompile the script file using SCRCOMP.EXE.
	
	MORE INFORMATION
	================
	
	For more information on using SCRCOMP.EXE, refer to "Compiling the Script File"
	section in versions 3.2 and 3.2a of Microsoft Mail for PC Networks
	"Administrator's Guide" on page 383 or page 320 for version 3.0b.
	
	Additional query words: 3.20 script Hayes
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
