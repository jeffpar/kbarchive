---
layout: page
title: "Q247639: WD97: Err Msg: &quot;Style Not Defined&quot; with StyleRef Field"
permalink: kb/247/Q247639/
---

## Q247639: WD97: Err Msg: &quot;Style Not Defined&quot; with StyleRef Field

	Article: Q247639
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta wd2000
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use a STYLEREF field that references a style name, the following error
	message may appear, rather than the correct style reference, if you open the
	document in a different language version of Word.
	
	  Error! Style not defined
	
	The error may appear in the language of the version of Word that is in use. For
	example, in the French version of Word, you may see the following:
	
	  Erreur ! Style non defini
	
	CAUSE
	=====
	
	The STYLEREF field references styles by name, and Word does not translate
	built-in style names to the language in use.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following steps:
	
	Change the StyleRef Field to Point to the Correct Style Name 
	------------------------------------------------------------
	
	1. Display field codes by pressing ALT+F9.
	
	2. Change the reference to the correct name. For example, change STYLEREF "Titre
	  1" to STYLEREF "Heading 1" if converting from French Word to English Word.
	
	3. Press F9 to update the field.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: Word97, migrate, migrating, language, styleref, field, reference, convert
	
	======================================================================
	Keywords          : kbdta wd2000 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
