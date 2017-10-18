---
layout: page
title: "Q173544: XADM: Security Keys Cannot Be Used Without Rich Text Format"
permalink: kb/173/Q173544/
---

## Q173544: XADM: Security Keys Cannot Be Used Without Rich Text Format

	Article: Q173544
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to send security keys to a user in another organization, instead of
	getting the Security Key Exchange Message dialog box, the user gets the
	following message:
	
	  You have received Public Security Keys from another user. Your version
	  of Microsoft Exchange client does not support this feature. You may
	  need to upgrade to a newer version in order to use these keys.
	
	  Name: JamesCha
	  Email: SMTP:JamesCha@company.com
	  Encryption Certificate:
	  MIIBWDCCAQgCBDPWXAswBwYFKw4DAgMwITELMAkGA1UEBhMCVVMxEjAQBgNVBAoTCU1pY3Jv
	  c29mdDAmFxE5NzA3MjIxNTMyMDkrMDUwMBcROTkwMTIzMTUzMjA5KzA1MDAwUTEOMAwGA1UE
	  AxMFamFtZXMxEzARBgNVBAMTCnJlY2lwaWVudHMxFjAUBgNVBAsTDXNjb3R0J3Mgd29ybGQx
	  EjAQBgNVBAoTCW1pY3Jvc29mdDBZMAsGCSqGSIb3DQEBAQNKADBHAkCuAg651vUEQLbqyakI
	  lU+/mOcXFtYLGKTn+6dCKRKxwEkCpnnHG/BE6xkXWGkj/I0PjK4PmaJFne7L0wmB7j+zAgMB
	  AAEwBwYFKw4DAgMDQQA8DhjXefi5kewRM4u9ul4SBJMKk9/DTjfzBKc3cOGm3cp5xRwOIINt
	  kQhlD4TGEdzcVyASg8HFmL5r+05Gcul7 Signing Certificate:
	  MIIBWDCCAQgCBDPWXAwwBwYFKw4DAgMwITELMAkGA1UEBhMCVVMxEjAQBgNVBAoTCU1pY3Jv
	  c29mdDAmFxE5NzA3MjIxNTM1MDArMDUwMBcROTkwMTIzMTUzNTAwKzA1MDAwUTEOMAwGA1UE
	  AxMFamFtZXMxEzARBgNVBAMTCnJlY2lwaWVudHMxFjAUBgNVBAsTDXNjb3R0J3Mgd29ybGQx
	  EjAQBgNVBAoTCW1pY3Jvc29mdDBZMAsGCSqGSIb3DQEBAQNKADBHAkDSWX8OrTb2Vgb/m4DB
	  sQKva/1Lp2tQHt5caURw11TBpxjTKc5ZUrRSUqF/wQxJgibT81IUxnmX6nBZZLVLJ5ZNAgMB
	  AAEwBwYFKw4DAgMDQQAZSlZ237C8M03hwgTOpzUfAgX5FdeucQ4v6gwwmCh3lQtlV9/ri4gZ
	  TzE8h0/amG/t2K0k+mKLNyS38NEaDK1j
	  Encryption Algorithm: CAST 40-bit
	
	CAUSE
	=====
	
	This is caused by not sending the security keys with Rich Text Format. When Rich
	Text Format is not used, the Internet Mail Service strips out the form used for
	sending security keys.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform one of the following two procedures:
	
	- In the Exchange Administrator program:
	  1. Go to Properties of the Internet Mail Service.
	
	  2. Select the Internal Mail tab.
	
	  3. Under Message Content Information, choose Interoperability.
	
	  4. In the Send Microsoft Exchange Rich Text Formatting box, select Always.
	
	  -or-
	
	- In the Exchange client:
	
	  1. Choose Tools, Address Book.
	
	  2. Go to File, New Entry, and select Internet Address.
	
	  3. Select the check box for Always Send to This Recipient in Microsoft
	     Exchange Rich-text Format.
	
	Additional query words: IMS
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword2
	Version           : WinNT:5.0
	
	=============================================================================
	
