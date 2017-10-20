---
layout: page
title: "Q262168: How to Disable 8BITMIME in Windows 2000 SMTP Service"
permalink: /kb/262/Q262168/
---

## Q262168: How to Disable 8BITMIME in Windows 2000 SMTP Service

{% raw %}

	Article: Q262168
	Product(s): Internet Information Server
	Version(s): 2000,5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000
	Last Modified: 30-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Windows 2000 includes a Simple Mail Transfer Protocol (SMTP) service
	that can be used as a relay host. By default, this SMTP service advertises
	8BITMIME and allows 8-bit Multipurpose Internet Mail Extensions (MIME) messages
	to be relayed. Some products (such as Microsoft Exchange Server versions 4.0,
	5.0, and 5.5) are not able to handle 8-bit MIME messages. This article describes
	how to disable the advertisement of 8BITMIME to prevent outside mail hosts from
	sending in 8-bit MIME messages.
	
	RESOLUTION
	==========
	
	To stop the Microsoft Windows 2000 SMTP service from advertising 8BITMIME, alter
	the metabase key that tells the service to advertise 8BITMIME. Use the
	Mdutil.exe file utility that is included on the Windows 2000 CD ROM.
	
	NOTE: The Mdutil.exe file utility is not installed with the Windows 2000 by
	default. It is located in the \i386 directory as MDUTIL.EX_. Copy this file to
	your local disk and run the following command to extract the utility:
	
	  EXTRACT MDUTIL.EX_
	
	To disable the 8BITMIME advertising, modify a metabase key on the SMTP Server
	Instance level.
	
	You can determine how many SMTP Virtual Server instances are configured by using
	the following command:
	
	  MDUTIL.EXE ENUM -path:smtpsvc
	
	You should now see entries such as the following:
	
	  [/smtpsvc/1]
	  [/smtpsvc/2]
	  [/smtpsvc/3]
	  ...
	
	Each of these entries represents an SMTP Virtual Server instance.
	
	You need to check in the MMC which SMTP Virtual Server instance you want to
	modify (count from top to bottom).
	
	To disable 8-bit MIME Support for this specific instance, you need to change one
	bit in the Metabase property 36998. To do this, you first need to get the
	original value of this property, switch off this bit, and then write the new
	value back to the metabase.
	
	1. Get the original Property Value by doing the following:
	
	Type the following command on the command prompt (replace <n> with the
	number of the SMTP Virtual Server instance you want to modify):
	
	  mdutil.exe get -path:smtpsvc/<n> -prop:36998
	
	If you get the following error message, then the property 36998 is not stored in
	the properties of this SMTP Virtual Server instance:
	
	  Error: GetData - HRES(0x800cc801) MD_ERROR_DATA_NOT_FOUND
	
	In this case, use the following command to retrieve the value from the SMTP
	master properties because this value is inherited by all instances that do not
	have the property set explicitly:
	
	  mdutil.exe get -path:smtpsvc -prop:36998
	
	The response should be similar to (sample!):
	
	  36998 : [IS] (DWORD) 0x7574c1={7697601}
	
	2. Switch off the bit that is responsible for 8BITMIME support. The responsible
	  bit is represented by the following mask: 0x0400000. To disable this bit, you
	  need to do a bitwise AND on the property value with 0xFBFFFFF.
	
	  To do this, start the calculator and switch it to the scientific view. Also
	  switch to the Hex-Mode. Now enter the hexadecimal property value (in this
	  case, 7574c1), press the AND button, and enter "FBFFFFF" (without the
	  quotation marks). The result is the new property value you need to set in the
	  metabase (in this case, 3574c1).
	
	3. Write back the new value to the metabase. All changes to this metabase
	  property should be made on the instance level. If you took the property from
	  the master properties you should write the property back to the specific SMTP
	  Virtual Server instance.
	
	  To replace the property value for the first SMTP Virtual Server instance, use
	  the following command:
	
	  mdutil.exe set -path:smtpsvc/1 -prop:36998 -utype:UT_SERVER -dtype:DWORD
	  -attrib:INHERIT -value:0x3574c1
	
	  IMPORTANT NOTE: Replace the property value 3574c1 in the upper line with your
	  property value.
	
	  The response should be similar to (sample!):
	
	  36998 : [IS] (DWORD) 0x3574c1={3503297}
	
	To turn 8-bit MIME advertising back on, repeat the preceding procedure using "OR
	0x0400000" instead of "AND 0xFBFFFFF."
	
	REFERENCES
	==========
	
	For additional information about a solution for NT Option Pack on NT Server 4.0,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q198415 XFOR: Disabling 8-BIT MIME Support on the Windows NT Option Pack SMTP
	  Service
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin2000 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbiisSearch kbiis500 kbWinAdvServSearch
	Version           : :2000,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
