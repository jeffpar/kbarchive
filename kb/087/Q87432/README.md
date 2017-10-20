---
layout: page
title: "Q87432: PC DB: Description of TPL File"
permalink: /kb/087/Q87432/
---

## Q87432: PC DB: Description of TPL File

{% raw %}

	Article: Q87432
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1e,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1e, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A TPL template file describes how information is input and displayed on the
	screen via a template window. All template files are stored in the TPL
	subdirectory.
	
	There are two types of templates used by the Mail system: predefined system
	templates and (optionally) a custom defined template for local postoffice
	users.
	
	The system templates are supplied with the Server and Gateway components of
	Microsoft Mail. They should never be modified and are marked as read-only during
	installation.
	
	The MS Mail administrator has the option to create an ADMIN.TPL file, which is
	used for locally defined users. The ADMIN.TPL file will always have an
	associated ADMIN.INF file that contains the data defined by the TPL file.
	
	The record size of the INF file is defined by the contents of the TPL file.
	Because of this, the TPL file should never be changed after the initial creation
	of the INF file. Template utilities are provided that allow the administrator to
	make any changes, if necessary.
	
	MORE INFORMATION
	================
	
	delimiter ::= '~'
	terminator ::= '\r'
	
	TemplateField ::= SEQUENCE {
	
	  prompt string
	  delimiter
	  start number
	  delimiter
	  width number
	  delimiter
	  edit string
	  delimiter
	  data string
	  delimiter
	  internal string
	  terminator
	
	}
	
	
	  Field     Description
	  -----     -----------
	  Prompt    This is a text label that describes the field. The prompt
	            appears to the left of the text entry field.
	
	  Start     This field is used to layout an entry field. It specifies
	            the character position from the left margin where the
	            entry field should be displayed.
	
	  Width     The number of characters in the field.
	  Edit      The permissible characters that can be entered into the
	
	            string. All characters are assumed to be in the codepage
	            850 character set.
	
	               Character   Description
	               ---------   -----------
	               U           Uppercase characters
	               N           Numeric characters
	               L           Lowercase characters
	               P           Punctuation characters
	               A           Any characters
	
	  Internal  This is an internal preamble that will be stored in the
	            INF record before the field data.
	
	For additional information, please see the "Templates, Custom User Directories"
	section in the Microsoft Mail for PC Networks "Administrator's Guide."
	
	
	Additional query words: 2.10e 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN210e
	Version           : WINDOWS:2.1e,3.0,3.2
	
	=============================================================================
	

{% endraw %}
