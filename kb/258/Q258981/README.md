---
layout: page
title: "Q258981: Error When You Add LU to Connection and Pool by Using Snacfg.exe"
permalink: /kb/258/Q258981/
---

## Q258981: Error When You Add LU to Connection and Pool by Using Snacfg.exe

	Article: Q258981
	Product(s): Microsoft SNA Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you add a logical unit (LU) by using the Snacfg.exe file with a command
	file that does not end with a carriage return and line feed pair (CR/LF), you
	may receive the following error message:
	
	  There is already an LU with this LU Number.
	
	WORKAROUND
	==========
	
	You can work around this problem by ensuring that the command file ends in a
	carriage return and line feed pair.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Create a file that is named Job4.txt, and use the following 20 lines as the
	  text in the file:
	
	  
	
	  LUA PALURD03 /ADD /CONNECTION:APUPOSC1 /POOL:ALURD03 /LUNUMBER:2
	  LUA PALURD04 /ADD /CONNECTION:APUPOSC1 /POOL:ALURD03 /LUNUMBER:3
	  LUA PALURD05 /ADD /CONNECTION:APUPOSC1 /POOL:ALURD03 /LUNUMBER:4
	  LUA PALURD06 /ADD /CONNECTION:APUPOSC1 /POOL:ALURD03 /LUNUMBER:5
	  LUA PALURE03 /ADD /CONNECTION:APUPOSC1 /POOL:ALURD03 /LUNUMBER:6
	  LUA PALURE04 /ADD /CONNECTION:APUPOSC1 /POOL:ALURD03 /LUNUMBER:7
	  LUA PALURE05 /ADD /CONNECTION:APUPOSC1 /POOL:ALURd03 /LUNUMBER:8
	  LUA PALURE06 /ADD /CONNECTION:APUPOSC1 /POOL:ALURd03 /LUNUMBER:9
	  LUA PALURG03 /ADD /CONNECTION:APUPOSC1 /POOL:ALURd03 /LUNUMBER:10
	  LUA PALURG04 /ADD /CONNECTION:APUPOSC1 /POOL:ALURd03 /LUNUMBER:11
	  LUA PALURG05 /ADD /CONNECTION:APUPOSC1 /POOL:ALURd03 /LUNUMBER:12
	  LUA PALURG06 /ADD /CONNECTION:APUPOSC1 /POOL:ALURd03 /LUNUMBER:13
	  LUA PALURH03 /ADD /CONNECTION:APUPOSC1 /POOL:ALURd03 /LUNUMBER:14
	  LUA PALURH04 /ADD /CONNECTION:APUPOSC1 /POOL:ALURd03 /LUNUMBER:15
	  LUA PALURH05 /ADD /CONNECTION:APUPOSC1 /POOL:ALURd03 /LUNUMBER:16
	  LUA PALURH06 /ADD /CONNECTION:APUPOSC1 /POOL:ALURd03 /LUNUMBER:17
	  LUA PALURI03 /ADD /CONNECTION:APUPOSC1 /POOL:ALURd03 /LUNUMBER:18
	  LUA PALURI04 /ADD /CONNECTION:APUPOSC1 /POOL:ALURd03 /LUNUMBER:19
	  LUA PALURI05 /ADD /CONNECTION:APUPOSC1 /POOL:ALURd03 /LUNUMBER:20
	  LUA PALURI06 /ADD /CONNECTION:APUPOSC1 /POOL:ALURd03 /LUNUMBER:21
	
	  Make sure that the last line does not end with a carriage return and line feed
	  pair.
	
	2. Create a connection that is named APUPOSC1.
	
	3. Create an LUA pool that is named ALURD03.
	
	4. Save your changes in SNA Server Manager.
	
	5. Type the following at a command prompt:
	
	  "snacfg PATH\@job4.txt /v" (without the quotation marks)
	
	  Be sure to use the proper path for the command file.
	
	You receive the following error message:
	
	  Line no 20: Processing command to add LUA PALURI06
	  Assigning LU PALURI06 to connection APUPOSC1
	  There is already an LU with this LU Number.
	  Command failed
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : :4.0
	
	=============================================================================
	
