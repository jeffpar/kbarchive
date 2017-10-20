---
layout: page
title: "Q105137: Explanation of Exporting Functions in Windows"
permalink: /kb/105/Q105137/
---

## Q105137: Explanation of Exporting Functions in Windows

{% raw %}

	Article: Q105137
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Exporting functions under Windows is one of the least understood but most
	important concepts to understand. If string constants are garbage or global
	variables contain the wrong information, then exported functions are probably
	not doing their job. Exported functions simply establish the correct data
	segment (DS) value on function entry.
	
	MORE INFORMATION
	================
	
	Function entry point code, referred to as "prolog" code, does the work of
	setting up all the registers on function entry. Exported prolog code works with
	the Windows loader to support all the different techniques of establishing DS.
	There are three types of exported prolog code: loading DS from the value in AX,
	loading DS from the value in SS, and loading DS from a hard-coded value fixed up
	by the loader. The first two techniques are used in applications, the last is
	used by dynamic-link libraries.
	
	Loading DS from the Value in AX
	-------------------------------
	
	This is the classic application exporting technique. This works with the
	MakeProcInstance function, which loads the correct DS value into AX before
	calling the exported function's prolog code. As an application is loaded, all
	exported functions built with the -Gw switch or -GA -GEa pair are modified so
	that the first 3 bytes of prolog code are NOPs. The following prolog code sets
	up the stack frame and finally loads DS from the value in AX. In mixed mode, it
	would appear as follows:
	
	    {
	       nop
	       nop
	       nop
	       push   bp
	       mov    bp,sp
	       push   ds
	       mov    ds,ax
	
	Loading DS from the Value in SS
	-------------------------------
	
	This is a more recent technique that assumes that the SS register contains the
	correct DS value on function entry. For applications that don't switch their
	stack segment nor are called from other applications, this is a valid
	assumption. The -GA default code loads DS from the value in SS without the
	loader required to fix up the prolog code. In mixed mode, it would appear as
	follows:
	
	    {
	       mov    ax,ss
	       push   bp
	       mov    bp,sp
	       push   ds
	       mov    ds,ax
	
	Loading DS from a Hard-Coded Value
	----------------------------------
	
	This is the classic dynamic-link library exported function prolog code. Because
	libraries are single instance, it's possible to get away with hard-coded values
	to establish DS. As a library is loaded, all exported functions built with -Gw
	or -GD are fixed up to load DS from a hard-coded value. In mixed mode, it
	appears as follows:
	
	    {
	       mov    ax,????
	       push   bp
	       mov    bp,sp
	       push   ds
	       mov    ds,ax
	
	In the two techniques that involve the loader, an EXPDEF record must appear in
	the EXE header for the exported function. This can be done by the classic
	EXPORTS statement in the module definition file (.DEF) or via the -GEe compiler
	switch. At a minimum, the newer switches require the __export keyword to brand
	exported functions at compile time or the -GEf switch (which brands all far
	functions as __export). An example of the use of the __export keyword is as
	follows:
	
	     void CALLBACK __export TheExportedFunction()
	
	Additional query words: 3.00 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
