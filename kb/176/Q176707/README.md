---
layout: page
title: "Q176707: PRB: Error &quot;Not enough Diskspace&quot; When Closing a Table"
permalink: kb/176/Q176707/
---

## Q176707: PRB: Error &quot;Not enough Diskspace&quot; When Closing a Table

	Article: Q176707
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	WARNING: The information in this article has not been confirmed or tested by
	Microsoft. Some or all of the information in this article has been taken from
	unconfirmed customer reports. ANY USE BY YOU OF THE INFORMATION PROVIDED IN THIS
	ARTICLE IS AT YOUR OWN RISK. Microsoft provides this information "as is" without
	warranty of any kind, either expressed or implied, including but not limited to
	the implied warranties of merchantability and/or fitness for a particular
	purpose.
	
	When you try to close a table (.dbf) file located on a CD-ROM that is not marked
	as read-only and also contains international characters, you may receive this
	error:
	
	  Not enough diskspace.
	
	In Visual FoxPro for Macintosh the program may fail with the following message:
	
	  The application Visual FoxPro for Macintosh has unexpectedly quit, because an
	  error of type 3 occurred. You should save your work in other open
	  applications and restart the computer.
	
	CAUSE
	=====
	
	The table is located on a CD-ROM and the file is not marked as read-only.
	
	RESOLUTION
	==========
	
	Add the NOUPDATE clause to the USE command that opens the table.
	
	NOTE: Selecting the "Open As Read-Only" check box adds the NOUPDATE clause to the
	USE command that is then executed.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Burn a custom CD-ROM to include a table file that meets the following
	  conditions:
	
	   - Table contains either a character field with international extended
	     characters (such as an umlaut) or contains a standard memo field with
	     international extended characters.
	
	   - Table codepage is marked as 0, which means that the table was saved
	     without a codepage tag.
	
	     NOTE: FoxPro program Cpzero.prg will cause this error to occur.
	
	   - Table is burned onto a CD-ROM without having its file attribute marked as
	     read only.
	
	     NOTE: Most CD-ROM software sets the read-only attribute by default and
	     there may not be an option to change this behavior.
	
	2. Add the following environment settings in the Config.fpw:
	
	        CODEPAGE = AUTO    && Without this setting problem will not occur.
	        EXCLUSIVE = ON
	
	3. Open the table.
	
	4. An informational dialog is displayed entitled "Code Page" that contains the
	  following message:
	
	  File <filename.dbf> is not marked with a code page. Please select the
	  code page it was created in.
	
	  By default the Platform option button is set to All and the Code Page list box
	  is set to 1252 - Windows ANSI. Click the Select button.
	
	5. Close the table with the following FoxPro command:
	
	        USE
	
	  The error message below is displayed:
	
	  Not enough diskspace.
	
	NOTE: This same test can be performed on a write-protected floppy disk. However,
	the error message is worded differently depending on the operating system being
	used.
	
	On Windows NT 4.0 the following error messages appear, but on Windows 95 only the
	second error message appears.
	
	  
	
	  Vfp.exe -  Write Protect Error
	  The disk cannot be written to because it is write protected. Please
	  Remove the write protection from the volume in Drive A:
	
	
	
	     [Abort]  [Retry]  [Ignore]
	
	Selection of the [Abort] or [Ignore] button generates the error dialog box:
	
	  
	
	     Microsoft Visual FoxPro
	     Error writing to file.
	
	        [OK] [Help]
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Perry Newton, Microsoft Corporation
	
	
	REFERENCES
	==========
	
	Microsoft Visual FoxPro for Windows Online Help; 3.0, 3.0b, 5.0, 5.0a; search
	on: Code Page Dialog Box
	
	Microsoft Visual FoxPro for Macintosh Online Help; version 3.0b; search on: Code
	Page Dialog Box
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
