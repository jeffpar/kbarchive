---
layout: page
title: "Q239060: WD97: Problems Opening or Locating Files Using UNC Path"
permalink: /kb/239/Q239060/
---

## Q239060: WD97: Problems Opening or Locating Files Using UNC Path

	Article: Q239060
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word8 word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to connect to, open, or locate a file with a long file name
	(UNC), one of the following problems may occur:
	
	Case 1: Advanced Search fails
	-----------------------------
	
	When you choose Find Now in the Advanced Find dialog box (on the File menu, click
	Open and then click Advanced), Word finds no files, even though the files
	actually exist in the location indicated. You can view the files in Windows
	Explorer, and you can open the files in Word.
	
	Case 2: Error with INCLUDE or INCLUDETEXT Field
	-----------------------------------------------
	
	The result of an INCLUDE or INCLUDETEXT field may display the following error
	message:
	
	  Error! Not a valid filename.
	
	Case 3: Error with Modify Location dialog box
	---------------------------------------------
	
	The following error message appears when you select a folder on a UNC drive that
	contains a space in the Modify Location dialog box:
	
	  Not a valid directory.
	
	NOTE: To open the Modify Location dialog box, click Options on the Tools menu,
	click to select the File Locations tab, and then click Modify.
	
	Case 4: Attaching data source to a mail merge main document fails
	-----------------------------------------------------------------
	
	When you try to attach a data source to a mail merge main document, no error
	message appears, but the data file does not appear in the Mail Merge Helper
	dialog box.
	
	CAUSE
	=====
	
	This problem may occur when there is a space in the path or in the name of a
	file.
	
	WORKAROUND
	==========
	
	To work around this problem, turn off the use of Universal Naming Convention
	(UNC) in Microsoft Word 97 by using the DontUseUNC switch.
	
	For additional information about the DontUseUNC switch, please click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q171406 WD97: How to Disable the Use of UNC
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.<A0>This problem was corrected in Microsoft
	Word 2000.
	
	MORE INFORMATION
	================
	
	For additional information about problems you may encounter when trying to
	access files using a Universal Naming Convention (UNC) path, please click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q138418 WD97: Can't Use UNC Drive for Document Path on Some Networks
	
	  Q122379 WD97: Error Saving Document: "Network or File Permission Error..."
	
	  Q192447 WD97: Errors Opening Files in a Map Root of a Novell 4.11 Server
	
	Additional query words: nolongnetnames dontuseunc
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
