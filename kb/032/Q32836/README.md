---
layout: page
title: "Q32836: .TYPE Operator Has New Bit Settings"
permalink: /kb/032/Q32836/
---

## Q32836: .TYPE Operator Has New Bit Settings

{% raw %}

	Article: Q32836
	Product(s): Microsoft Macro Assembler
	Version(s): 5.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Macro Assembler (MASM), version 5.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions of the Microsoft Macro Assembler (MASM) earlier than 5.1, the .TYPE
	operator only uses bits 0, 1, 5, and 7. With MASM version 5.1, the use of bits
	2, 3 and 4 has been added.
	
	The following is a chart of bit assignments taken from page Update-29 of
	"Microsoft Macro Assembler Version 5.1 Update, Microsoft CodeView and Utilities
	Update, Microsoft Editor" manual:
	
	  Bit Position    If Bit=0                If Bit=1
	
	  0               Not program related     Program related
	  1               Not data related        Data related
	  2               Not a constant value    Constant value
	  3               Addressing mode is not  Addressing mode is direct
	                      direct
	  4               Not a register          Expression is a register
	  5               Not defined             Defined
	  7               Local or public scope   External scope
	
	Additional query words: kbinf 5.10
	
	======================================================================
	Keywords          :  
	Technology        : kbMASMsearch kbAudDeveloper kbMASM510
	Version           : :5.1
	
	=============================================================================
	

{% endraw %}
