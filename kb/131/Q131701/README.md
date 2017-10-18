---
layout: page
title: "Q131701: Systems Management Server Inventory Reports Incorrect CPU Speed"
permalink: kb/131/Q131701/
---

## Q131701: Systems Management Server Inventory Reports Incorrect CPU Speed

	Article: Q131701
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1
	Operating System(s): 
	Keyword(s): kbnetwork smsgeneral kbArtTypeINF
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On certain types of processors, Systems Management Server reports the wrong
	speed of the processor as well as the incorrect machine type.
	
	CAUSE
	=====
	
	Only the following approximate CPU speeds are evaluated and reported:
	
	  8088 (5Mhz)
	  80286 (12Mhz)
	  80386 (33Mhz)
	  80486 (66Mhz)
	  Pentium (60Mhz)
	
	Items outside this range may be reported incorrectly.
	
	The following computers are incorrectly identified:
	
	  Dell 560 60mhz (with bad coprocessor) - reported as 66mhz
	  Dell 560 60mhz (with fixed coprocessor) do not report speed
	  Gateway 2000 100mhz Pentium - reported as 90mhz
	  PS/2 Mod 57-059 - reported as PS/2 Model 70
	  PS/2 Mod 57-OBA - reported as PS/2 Model 70
	  PS/2 Mod 76 - reported as PS/2 Model 70
	  PS/2 Mod 77 - reported as PS/2 Model 70
	
	The following computers are not recognized as laptops, even though they are:
	
	  IBM ThinkPad 700, 750C, CS, CE, 720C, CE, 360C, CS, CSE
	  NEC Versa V M P
	
	The following also show up incorrectly:
	
	  Compaq Deskpro
	  Deskpro XL
	  Proliant
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	versions 1.0 and 1.1. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodsms sms
	
	======================================================================
	Keywords          : kbnetwork smsgeneral kbArtTypeINF 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1
	
	=============================================================================
	
