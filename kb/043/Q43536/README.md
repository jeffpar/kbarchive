---
layout: page
title: "Q43536: Using _getvideoconfig for Analog Monitors"
permalink: /kb/043/Q43536/
---

## Q43536: Using _getvideoconfig for Analog Monitors

	Article: Q43536
	Product(s): See article
	Version(s): 5.10
	Operating System(s): MS-DOS
	Keyword(s): ENDUSER | s_quickc | mspl13_c
	Last Modified: 17-MAY-1989
	
	In the Microsoft C 5.10 Optimizing Compiler Run-Time Library, the
	function _getvideoconfig does not make a distinction between an analog
	color monitor and an analog monochrome monitor. For both of these
	configurations, it puts the value _ANALOG in the "monitor" field of
	the struct "videoconfig." _ANALOG is a manifest constant defined in
	the include file GRAPH.H to be 0x0018.
	
	The function _getvideoconfig is enhanced in QuickC Version 2.00 so
	that it recognizes analog monitors as being color or monochrome.
	There are two additional manifest constants defined in the new
	GRAPH.H: _ANALOGCOLOR (defined to be 0x0010) and _ANALOGMONO
	(0x0008).
