---
layout: page
title: "Q41670: QuickC 2.00 README.DOC: Warning Message C4118"
permalink: /kb/041/Q41670/
---

## Q41670: QuickC 2.00 README.DOC: Warning Message C4118

{% raw %}

	Article: Q41670
	Product(s): See article
	Version(s): 2.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 2-MAY-1989
	
	The following information is taken from the QuickC Version 2.00
	README.DOC file, part 3, "Notes on 'QuickC Tool Kit.'" The following
	notes refer to specific pages in "QuickC Tool Kit."
	
	Page  298  Warning Message C4118
	
	The QuickC preprocessor accepts but ignores the following pragmas:
	
	   #pragma comment (compiler)
	   #pragma comment (lib)
	   #pragma comment (exestr)
	   #pragma comment (user)
	
	Using these pragmas results in warning message C4118, but only at
	warning level 3. In all other cases, C4118 is a level-1 warning.

{% endraw %}
