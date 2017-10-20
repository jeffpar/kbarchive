---
layout: page
title: "Q86615: Cakewalk Professional for Windows May Cause GP Fault"
permalink: /kb/086/Q86615/
---

## Q86615: Cakewalk Professional for Windows May Cause GP Fault

{% raw %}

	Article: Q86615
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Versions 1.0 and 1.02 of Cakewalk Professional for Windows may cause a general
	protection (GP) fault in module WINCAKE.EXE.
	
	CAUSE
	=====
	
	This error occurs when a .CAL program is missing a parenthesis.
	
	Versions 1.0 and 1.02 of Cakewalk Professional for Windows contain a programming
	language called CAL, which allows simple tasks to be repeated over a range of
	MIDI events.
	
	If a .CAL program is missing a closing parenthesis, WINCAKE.EXE might cause a GP
	fault instead of reporting a syntax error.
	
	This problem has been confirmed by Twelve Tone Systems in version 1.0 and 1.02 of
	Cakewalk Professional for Windows. This may be corrected in a future version of
	Cakewalk Professional.
	
	
	For more information, contact Twelve Tone Systems technical support.
	
	The Cakewalk Professional product included here is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, concerning
	this product's performance or reliability.
	
	Additional query words: gpf 3.10 3.11 3rdparty err msg sequencer compiler twelvetone
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
