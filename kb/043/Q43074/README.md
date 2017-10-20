---
layout: page
title: "Q43074: Cannot Use Standard Device Names as Filenames"
permalink: /kb/043/Q43074/
---

## Q43074: Cannot Use Standard Device Names as Filenames

{% raw %}

	Article: Q43074
	Product(s): See article
	Version(s): 1.00   | 1.00
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 17-MAY-1989
	
	You cannot use the standard device names (COMx, LPTx, and CON) as the
	base filename in the Microsoft Editor.
	
	For example, the command "M COM1.C" under DOS will attempt to open the
	communications port for editing and will hang the computer.
	
	This information has been tested for the following devices: COM1,
	COM2, LPT1, LPT2, CON. The different devices give slightly different
	results. COM1 and COM2 will hang the computer immediately, but the
	others will give errors or hang when the file is saved.
	
	The protect-mode editor behaves in the same fashion.

{% endraw %}
