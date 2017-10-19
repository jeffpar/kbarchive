---
layout: page
title: "Q246475: XCLN: Storage Limit Warning Is in Mixed Languages"
permalink: /kb/246/Q246475/
---

## Q246475: XCLN: Storage Limit Warning Is in Mixed Languages

	Article: Q246475
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 31-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Exchange Windows 95 or Windows 98 Client version 4.0 or 5.0
	with Exchange Server version 4.0, 5.0, or 5.5, a storage limit error message may
	be displayed in a mix of English and Spanish that is similar to the following:
	
	  Esta sobrepasando el limite de tamano establecido para su buzon por el
	  administrador del sistema.
	
	  El limite de tamano para su buzon es de 2752 KB
	  Actualmente ha sobrepasado este limite en 189202504 KB
	
	  Es posible que no pueda enviar nuevos mensajes hasta que reduzca el tamano del
	  buzon.
	
	  You will receive a warning when your mailbox reaches 1024 KB. You cannot send
	  mail when your mailbox reaches 2048 KB.
	
	  Para liberar espacio, elimine algunos elementos que ya no necesite o muevalos
	  a sus Carpetas personales. Los elementos en todos sus buzones, incluyendo los
	  Elementos eliminados y Elementos enviados, cuentan contra su limite de
	  tamano. Debe vaciar su carpeta Elementos eliminados despues de eliminar
	  elementos o el espacio no sera liberado.
	
	  Para mas informacion consulte el tema de Ayuda sobre la carpeta de Elementos
	  eliminados.
	
	WORKAROUND
	==========
	
	To work around this problem, upgrade the client to Exchange Client version 5.0
	Service Pack 1 or to the Outlook client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Client
	Spanish version 4.0.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
