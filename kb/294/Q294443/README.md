---
layout: page
title: "Q294443: XCLN:  How to Add Exchange 5.0 Client as Default E-mail Program"
permalink: /kb/294/Q294443/
---

## Q294443: XCLN:  How to Add Exchange 5.0 Client as Default E-mail Program

{% raw %}

	Article: Q294443
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup kbdta msiew95 msient msiew98 exc5 exc5sp1 kbWinME kbWin95 kbWin98 kbWin98
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, version 5.0 
	- Microsoft Exchange Windows NT client, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set Exchange 5.0 client as the default e-mail
	program.
	
	MORE INFORMATION
	================
	
	By default, Microsoft Windows 95, Microsoft Windows 98, Microsoft Windows 98
	Second Edition, Microsoft Windows NT 4.0, Microsoft Windows Millennium Edition
	(Me), Microsoft Windows 2000 Professional, and Microsoft Internet Explorer only
	recognize Microsoft Outlook, Microsoft Outlook Express, and Microsoft Hotmail as
	valid e-mail programs. After you install the Exchange 5.0 client program, if you
	start Internet Explorer, click Internet Options on the Tools menu, click
	Options, and then click Programs, the Exchange 5.0 client program is not
	displayed. To set Exchange 5.0 client as the default mail program, add the
	following registry keys to the registry:
	
	- HKEY_LOCAL_MACHINE\SOFTWARE\Clients\Mail\Exchange
	
	- HKEY_LOCAL_MACHINE\SOFTWARE\Clients\Mail\Exchange\Protocols
	
	- HKEY_LOCAL_MACHINE\SOFTWARE\Clients\Mail\Exchange\Protocols\mailto
	
	- HKEY_LOCAL_MACHINE\SOFTWARE\Clients\Mail\Exchange\Protocols\mailto\DefaultIcon
	
	- HKEY_LOCAL_MACHINE\SOFTWARE\Clients\Mail\Exchange\Protocols\mailto\shell
	
	- HKEY_LOCAL_MACHINE\SOFTWARE\Clients\Mail\Exchange\Protocols\mailto\shell\open
	
	- HKEY_LOCAL_MACHINE\SOFTWARE\Clients\Mail\Exchange\Protocols\mailto\shell\open\command
	
	- HKEY_LOCAL_MACHINE\SOFTWARE\Clients\Mail\Exchange\shell
	
	- HKEY_LOCAL_MACHINE\SOFTWARE\Clients\Mail\Exchange\shell\open
	
	- HKEY_LOCAL_MACHINE\SOFTWARE\Clients\Mail\Exchange\shell\open\command
	
	After you have added the registry keys, add the following values:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Clients\Mail\Exchange
	
	3. On the Edit menu, click New, click String value, and then add the following
	  registry value:
	
	  Value name: (Default)
	  Data type: String value
	  Value data: Exchange
	
	4. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Clients\Mail\Exchange\Protocols\mailto\DefaultIcon
	
	5. On the Edit menu, click New, click String value, and then add the following
	  registry value:
	
	  Value name: (Default)
	  Data type: String value
	  Value data: C:\<ExchangeClientFolder>\Exchng32.exe
	
	6. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Clients\Mail\Exchange\Protocols\mailto\shell
	
	7. On the Edit menu, click New, click String value, and then add the following
	  registry value:
	
	  Value name: (Default)
	  Data type: String value
	  Value data: C:\<ExchangeClientFolder>\Exchng32.exe
	
	8. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Clients\Mail\Exchange\shell\open\command
	
	9. On the Edit menu, click New, click String value, and then add the following
	  registry value:
	
	  Value name: (Default)
	  Data type: String value
	  Value data: C:\<ExchangeClientFolder>\Exchng32.exe
	
	10. Quit Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbsetup kbdta msiew95 msient msiew98 exc5 exc5sp1 kbWinME kbWin95 kbWin98 kbWin98SE kbWinNT400x kbWin2000 
	Technology        : kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange500NT kbExchange500Win95
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
