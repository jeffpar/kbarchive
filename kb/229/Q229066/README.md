---
layout: page
title: "Q229066: PC WRmt: Msrmttr.dll Causes Usgeneric.scr to Return NO ANSWER"
permalink: /kb/229/Q229066/
---

## Q229066: PC WRmt: Msrmttr.dll Causes Usgeneric.scr to Return NO ANSWER

	Article: Q229066
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you replace the Msrmttr.dll from the year 2000 (Y2K) patches for MS Mail
	Remote for Windows and if you are using the Usgeneric modem script, the modem
	may no longer connect and returns a "No Answer" message.
	
	In all cases so far, the failures have occurred when using high speed modems such
	as US Robtics/3COM/Megahertz 56K PCMCIA modem cards, IBM X2 PCCard 56K PCMCIA
	modems, or IBM ThinkPad internal 56K modems.
	
	CAUSE
	=====
	
	The Usgeneric modem script was intended for basic 1200 and 2400 baud modems.
	
	WORKAROUND
	==========
	
	The above-mentioned fast modems require specialized scripts written by the modem
	manufacturer.
	
	The US Robotics/3COM/Megahertz 56K PCMCIA modem cards and the IBM X2 PCCard
	PCMCIA modems have worked correctly with the Ususrhs.scr script available from
	3COM's Web site:
	
	  http://www.3com.com/
	
	The IBM ThinkPad internal 56K modems have worked correctly with the Ibmmwave.scr
	script file available from IBM's Web site:
	
	  http://www.ibm.com/
	
	MORE INFORMATION
	================
	
	Due to various issues involving the combination of different modems, modem
	scripts and upgraded DLL files, it may be necessary after upgrading to this DLL
	file to change out your modem script. If problems start occurring after you
	upgrade to the new DLL file, please contact your modem manufacturer and obtain
	their latest modem script. For information about how to contact your modem
	manufacturer, click the appropriate article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	Issue type        : kbprb
	
	=============================================================================
	
