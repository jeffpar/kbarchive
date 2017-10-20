---
layout: page
title: "Q30579: Predefined Text Macros Are Case Sensitive"
permalink: /kb/030/Q30579/
---

## Q30579: Predefined Text Macros Are Case Sensitive

{% raw %}

	Article: Q30579
	Product(s): See article
	Version(s): 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_masm
	Last Modified: 12-JAN-1989
	
	When assembling in Microsoft Macro Assembler Version 5.10 with the
	/ML and predefined text macros, each word in the name of the text
	macro must begin with an uppercase letter.
	   In MASM Version 5.00, you can use a predefined text macro, such as
	@filename, when assembling with the /ML switch. In MASM Version 5.10,
	use @FileName with the /ML switch.
	
	   This convention does not apply to the predefined equates used with
	segment directives, such as the equate @curseg.

{% endraw %}
