---
layout: page
title: "Q96657: 3COM: UPLOAD.EXE -D Parameter Does Not Require Backslash (&#92;)"
permalink: /kb/096/Q96657/
---

## Q96657: 3COM: UPLOAD.EXE -D Parameter Does Not Require Backslash (&#92;)

{% raw %}

	Article: Q96657
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to 3Com 3+Mail, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for version 1.0 of the Microsoft Mail Gateway to 3Com Mail
	Conversion Utility contains an error that may make installing the product more
	difficult.
	
	On pages 46 and 47 of the "Microsoft Mail Gateway to 3Com 3_Mail Administrator's
	Guide," and in the README.TXT file for Microsoft Mail Conversion Utility to 3Com
	3+Mail, the discussion of the -D parameter (which indicates the MS-DOS drive
	letter for the Microsoft Mail for PC Networks postoffice) documents the
	parameter as -DM:\, with a trailing backslash (\) character. The backslash
	character is not used and it can cause the conversion to fail.
	
	Page 47 shows a correct example under the heading "Typical UPLOAD Examples." The
	example shows the parameter as -DM:, where the drive letter is followed only by
	a colon (:) character.
	
	Additional query words: 1.00 slash forwardslash docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGate3COM3Plus100
	Version           : :1.0
	
	=============================================================================
	

{% endraw %}
