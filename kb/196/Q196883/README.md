---
layout: page
title: "Q196883: WD97: Invalid Field Name Can Be Added to Word Data Source"
permalink: kb/196/Q196883/
---

## Q196883: WD97: Invalid Field Name Can Be Added to Word Data Source

	Article: Q196883
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbdta kbfield word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you click the Manage Fields button on the Database toolbar while setting up
	a mail merge data file, Microsoft Word allows you to enter invalid field names.
	These invalid field names are converted to valid field names. However, Word does
	not allow you to add invalid field names when you use the Create Data Source
	dialog box.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the versions of Word listed at
	the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Word converts the invalid field names you enter in the Manage Fields dialog box
	into valid field names, for example:
	
	- Word replaces field names that are created using a symbol or series of
	  symbols, such as the pound sign (#), the dollar sign ($), or the percent sign
	  (%).
	
	- If a symbol is used in combination with a valid field name (for example, $
	  Amt), Word replaces the symbol with the letter M and the space with the
	  underscore character (for example, $ Amt becomes M_Amt).
	
	- If a number is used in the field name--for example, 1234--Word adds the
	  letter M and an underscore as a prefix to the field name (M_1234).
	
	- Word truncates any field longer than 40 characters.
	
	- If the invalid field contains spaces, Word replaces the spaces with the
	  underscore character.
	
	Because the invalid field names are either truncated or converted to acceptable
	field names, they do not cause errors during a mail merge.
	
	NOTE: There are two ways to activate the Database toolbar:
	
	- While editing the data source using the Edit Data Source button from the mail
	  merge main document, click View Source in the Data Form dialog box.
	
	  -and-
	
	- Click Toolbars on the View Menu and select Database in the Toolbars list.
	
	Additional query words: manage datafile datasource source symbol document
	
	======================================================================
	Keywords          : kbualink97 kbdta kbfield word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
