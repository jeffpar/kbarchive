---
layout: page
title: "Q35817: M on an AMDEK System 88 XT Clone"
permalink: /kb/035/Q35817/
---

## Q35817: M on an AMDEK System 88 XT Clone

{% raw %}

	Article: Q35817
	Product(s): See article
	Version(s): 1.00
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | | mspl13_basic
	Last Modified: 30-SEP-1988
	
	Problem:
	
	When running M on an AMDEK System 88, which is an XT clone, the M
	editor hangs the machine requiring a warm boot. The machine was using
	an EPC Keyboard that is an AT style keyboard.
	
	Response:
	
	This is a known incompatibility with this hardware configuration and M
	Version 1.00. AMDEK is aware of this problem and has a patch that they
	can send you. To obtain a patch, call AMDEK at (408) 435-2832. The
	patch contains the following three files:
	
	READ.ME
	CLREPC.EXE
	SETEPC.EXE.
	
	The problem is that M was checking the keyboard, which in this case
	was an AT style keyboard, and assuming it was running on an AT clone.
	This situation caused the hang.
	
	By running SETEPC.EXE, a switch is set so M sees the keyboard as a XT
	keyboard and everything functions properly. CLREPC.EXE clears this
	switch.

{% endraw %}
