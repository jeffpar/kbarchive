---
layout: page
title: "Q146325: XADM: Field Alignment Ignored if Entry Type is not Text"
permalink: kb/146/Q146325/
---

## Q146325: XADM: Field Alignment Ignored if Entry Type is not Text

	Article: Q146325
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Electronic Forms Designer, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The alignment property of an Entry Field in a Microsoft Exchange Electronic Form
	(Eform) does not apply to any data that is entered into that Entry Field. The
	data in the Entry Field will be left justified instead of what is entered into
	the alignment property of the field properties.
	
	MORE INFORMATION
	================
	
	If the type property of a entry field is changed to anything other than text,
	the alignment properties will be ignored. By default the entry field text is
	left justified except when the following two conditions are met:
	
	- The Type field on the Format tab must be set to Text.
	
	- The 'Allow multiple lines' option on the Format tab must be selected.
	
	The only time that the alignment properties will affect the field is when the
	field type is text. You can go to the field properties/format tab and change the
	alignment type, but it will not apply.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 4.0 of the Microsoft
	Exchange Electronic Forms Designer. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbZNotKeyword kbExchangeEForms kbExchangeEforms500 kbExchangeEForms400
	Version           : 4.0 5.0
	
	=============================================================================
	
