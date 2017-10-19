---
layout: page
title: "Q62063: Mac Hyp: Reading an Enclosed File from a Message"
permalink: /kb/062/Q62063/
---

## Q62063: Mac Hyp: Reading an Enclosed File from a Message

	Article: Q62063
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following syntax reads the enclosed file contained in the specified message
	from the Mail server:
	
	     msmail(getEnclosure, messageRef [,fileName] [,replace] [,index])
	     => fileName
	
	MORE INFORMATION
	================
	
	The file is saved under the name "fileName". "fileName" can be a complete path
	or a partial path as explained under addEnclosure. If no name is provided, the
	standard Macintosh Save File dialog box is displayed, allowing the user to
	specify a name.
	
	"messageRef" is a reference to a selected message obtained by making a call to
	the msmail function using a parameter that returns a message reference.
	
	If the "replace" flag is true and a file with the name "fileName" already exists
	on your system, it will be overwritten. If "replace" is false, then "#n" (where
	"n" is a number) will be appended to the filename before it is saved so that the
	existing file is not overwritten. The "replace" flag is ignored if "fileName" is
	not specified.
	
	The optional "index" parameter allows multiple enclosures to be extracted from a
	message. Since this feature was not implemented in Microsoft Mail 2.00, passing
	anything other than 0 (zero) in Mail 2.00 returns an error (0 is the default).
	
	Note: The "index" parameter changed in Mail 3.00. The "index" parameter can be
	from 1 to the number of enclosed files. Updated scripts that were used with Mail
	2.00 should be modified if they used the optional 0 index. Otherwise, a "Bad
	Index error" will be returned in MailResultText. The default in Mail 3.00 is 1.
	
	In all cases, the name (not path) that the file was successfully saved with is
	returned.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
