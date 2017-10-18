---
layout: page
title: "Q75957: Mac Form: Changing Font on Printed Form"
permalink: kb/075/Q75957/
---

## Q75957: Mac Form: Changing Font on Printed Form

	Article: Q75957
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): WINDOWS:2.0,2.0a,2.0b,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for AppleTalk Networks, versions 2.0, 2.0a, 2.0b, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Form Designer for Microsoft Mail can create custom forms for use on a Mail
	server. Included in the form is a description of the printed form. This
	description assumes some defaults that can be changed only with special scripts.
	
	MORE INFORMATION
	================
	
	The following global font variables can be modified on the print screen:
	
	  laserLabelFont
	  laserFieldFont
	  imageLabelFont
	  imageFieldFont
	
	NOTE: This information relies on System 6.0.x font ID numbers and may not work
	correctly with System 7.0. Make the form and install it using System 6.0.x only.
	Once it is installed, it doesn't matter if System 6.0.x or 7.0 users uses it,
	just as long as it was created and installed with System 6.0.x.
	
	To specify fonts for the print description, you must access the card script. The
	only scripts that are used in a form when it is compiled are "on compile"
	scripts. Put new values in the global font variables listed above to override
	the defaults. To modify the scripts, do the following:
	
	1. Go to the printed form card.
	
	2. Bring up the message box (press COMMAND+M).
	
	3. Type the following, then press RETURN:
	
	  " set userLevel to 5 " (without the quotation marks)
	
	4. Open the card script (press COMMAND+OPTION+C).
	
	5. Add a script that looks like this:
	
	     on compile                         <- Handler for the compile message
	        global laserFieldFont           <- Declare the global
	        put 5513 into laserFieldFont    <- Put in new value (see below)
	     end compile                        <- End of the compile message
	
	The font ID numbers (5513 in example), as found in the FONT resource of the
	System file, will vary from Macintosh to Macintosh. The font ID numbers from the
	System of the Macintosh the form is compiled and installed from are changed to
	font names during installation.
	
	Additional query words: 2.00 2.00a 2.00b 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailATN300 kbMailATN200 kbMailATN200a kbMailATN200b
	Version           : WINDOWS:2.0,2.0a,2.0b,3.0
	
	=============================================================================
	
