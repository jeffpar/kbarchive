---
layout: page
title: "Q98217: NDIS Driver Problems with Thomas Conrad Ethernet Cards"
permalink: /kb/098/Q98217/
---

## Q98217: NDIS Driver Problems with Thomas Conrad Ethernet Cards

	Article: Q98217
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	The NE2000 NDIS driver that ships with LAN Manager 2.1a and 2.2 does not load at
	startup because it does not work with the /TC5043 and /TC5045 Ethernet card
	adapters from Thomas Conrad Corporation.
	
	CAUSE
	=====
	
	Although these cards are supposed to be an exact clone of the NE2000 card (using
	the St. Nick chipset) Thomas Conrad Corp. has confirmed a problem with their
	Ethernet adapters when used with LAN Manager versions 2.1a and 2.2.
	
	RESOLUTION
	==========
	
	There is a PROM upgrade that solves the problem. You can obtain it by calling
	Thomas Conrad Corp. at (800) 332-8683. You can either use the old driver (from
	LAN Manager 2.1) or upgrade the PROM on the adapter card.
	
	Additional query words: 2.10a 2.1a 2.20 2.2 Thomasconrad
	
	======================================================================
	Keywords          : kbnetwork 
	
	=============================================================================
	
