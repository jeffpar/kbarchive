---
layout: page
title: "Q230369: WD97: DocErr: Help Text About TOC Field &#92;p Switch Is Incorrect"
permalink: /kb/230/Q230369/
---

## Q230369: WD97: DocErr: Help Text About TOC Field &#92;p Switch Is Incorrect

{% raw %}

	Article: Q230369
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
	
	When you view the Microsoft Word Help topic about the TOC field, the information
	about using up to five characters with the "\p" switch is incorrect.
	
	  \p "Separators"     Specifies the characters that separate an entry
	                      and its page number. For example, the field
	                      {TOC \p "---"} displays a result such as
	                      "Selecting Text---53." The default is a tab with
	                      leader dots. You can use up to five characters,
	                      which must be enclosed in quotation marks.
	
	For more information about the TOC field, click "Contents and Index" on the Help
	menu, click the Index tab in Word Help, type the following text
	
	  TOC
	
	and then double-click the selected text to go to the "Field codes: TOC (Table of
	Contents) field" topic. If you are unable to find the information you need, ask
	the Office Assistant.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The maximum number of characters that can be used with the "\p" switch is one.
	The Word TOC Help topic should correctly state the following:
	
	  \p "Separator"      Specifies the character that separates an entry
	                      and its page number. For example, the field
	                      {TOC \p "-"} displays a result such as
	                      "Selecting Text-53." The default is a tab with
	                      leader dots. You can use only one character,
	                      which must be enclosed in quotation marks.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
