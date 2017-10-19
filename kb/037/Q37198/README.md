---
layout: page
title: "Q37198: Setup Won't Accept Drive on Novell Network"
permalink: /kb/037/Q37198/
---

## Q37198: Setup Won't Accept Drive on Novell Network

	Article: Q37198
	Product(s): See article
	Version(s): 5.10   | 5.10
	Operating System(s): MS-DOS | OS/2
	Keyword(s): ENDUSER | | mspl13_c
	Last Modified: 18-NOV-1988
	
	Setup on Novell network Versions 2.0x gives "cannot create subdirectory
	G:\(etc.)" when trying to specify a destination for bound executables
	(i.e., the first question about paths that the setup program asks).
	
	It will not install on a network because it is illegal to do so
	without a special licensing agreement with Microsoft. If you have this
	agreement you receive a setup program that installs on the network.
	
	This scenario should not be confused with the situation of someone
	installing Microsoft software on their immediate machine and using
	network drives to store files they have created. This process is
	allowed.
