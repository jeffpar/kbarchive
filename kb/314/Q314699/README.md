---
layout: page
title: "Q314699: Encarta 2002: Prompted to Insert CD When Accessing Content"
permalink: kb/314/Q314699/
---

## Q314699: Encarta 2002: Prompted to Insert CD When Accessing Content

	Article: Q314699
	Product(s): Microsoft Home Multimedia Titles
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Reference Library 2002, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access multimedia content in Microsoft Encarta Reference
	Library 2002, you may receive the following message:
	
	  Switch CDs
	  Insert Compact Disc.
	
	  Reference Library Disc <disc number>
	
	This behavior occurs even though you installed Encarta Reference Library from a
	network share.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- You installed Encarta Reference Library from a network share.
	
	  -and-
	
	- The network share was created from Encarta Reference Library installation
	  CDs.
	
	  -and-
	
	- The network share was created by following the instructions in the "To share
	  Encarta product files from a server's hard disk drive" section under "Step 1.
	  Share Encarta product files from a server" of the Network Administrator's
	  Guide for Encarta Reference Library 2002 (Nag.rtf).
	
	RESOLUTION
	==========
	
	To resolve this behavior, use any of the following methods, as appropriate to
	your situation.
	
	NOTE: The methods discussed in this article refer to the Network Administrator's
	Guide for Encarta Reference Library 2002 (Nag.rtf). This document is located in
	the \Support folder on CD 1.
	
	Method 1
	--------
	
	Obtain Encarta Reference Library 2002 on DVD-ROM. You do not see the behavior
	that is described in the "Symptoms" section of this article if you install
	Encarta Reference Library from a network share that is created from Encarta
	Reference Library DVDs.
	
	Method 2
	--------
	
	1. Follow the directions in the "To share Encarta product files from a server's
	  hard disk drive" section under "Step 1. Share Encarta product files from a
	  server" of the Network Administrator's Guide to copy the contents of the
	  Encarta Reference Library CDs to a folder on your server.
	
	2. Locate the SuiteCD.ini file in the following folder on your server, where
	  <path> is the path on your server:
	
	  \<path>\EE\Encarta
	
	3. Open the SuiteCD.ini file in Notepad, and then replace the contents of the
	  SuiteCD.ini file on your hard disk with the following text:
	
	[Packages]
	
	ContESA.akc={5541255C-A670-4444-B872-309F71E5C666}
	
	ContEDA.akc={07F38453-42A9-4E01-A723-8E9C2FD68951}
	
	ContStd.akc={128DB0A8-04BD-4CB8-B1B1-8EBDE9EECF64}
	
	ContDlx.akc={5F28238E-B2D3-4E75-ACEB-FC2B824A66C3}
	
	ContAfr.akc={8EB09F88-ED1B-4482-AD11-81CA67D8FFEE}
	
	ContEWA.akc={ADCF944A-45AD-4DAD-B61B-DA8F9D870D52}
	
	DataESA.akc={BECC2D14-7673-4151-B533-6A8AF97556D8}
	
	DataEDA.akc={2F70E5DE-FECB-46E5-A87E-8DBD0E027BC1}
	
	DataStd.akc={BB2ABDD8-3B66-444D-93FB-B28A56BE8734}
	
	DataDlx.akc={036E48C5-E463-47D1-806C-2DFBD95799C9}
	
	DataAfr.akc={C352FBB6-52E6-4B41-983E-95A1DF3DB06F}
	
	DataEWA.akc={02F67AB6-D4D6-4E9C-83BF-D16C815F793A}
	
	ThumbESA.its={2A267050-8001-4E2F-AFEE-8D70D33122C5}
	
	ThumbEDA.its={3950E323-9149-4DA2-906F-E9D1F27C4002}
	
	ThumbStd.its={C782CD05-ACF7-4271-9986-991C24192F82}
	
	ThumbDlx.its={00A66C19-8C17-4B57-B221-77B2331C2A8D}
	
	ThumbAfr.its={F3540167-6F0D-440A-B257-F9D3B08A66CF}
	
	ThumbEwa.its={517C645B-7888-49A7-89FF-B1B6B110412C}
	
	PiconESA.its={58509A8D-D56C-402C-8585-86C89EC50EA4}
	
	PiconEDA.its={4B9A3A2D-DE63-49F5-A6F7-B707F6978572}
	
	PiconStd.its={CBA655A9-6990-400E-AE7B-36A24360F9D8}
	
	PiconDlx.its={531ABC30-E441-459D-A33C-64D42F1C4463}
	
	PiconAfr.its={2501A45B-5861-4263-91D4-B6E83F4B16C9}
	
	PiconEwa.its={A3B86A3B-B23D-4523-96A2-B026CEF818C3}
	
	MedAll.its={2FDA14CE-5378-4279-9111-0ED489482CE8}
	
	MedESA.its={A5D54990-9DFE-40CC-B5FB-0B194EDCA212}
	
	MedESA00.its={B2A89FF2-2848-4E59-8591-9481BC67A1C6}
	
	MedESA01.its={02833CD9-9951-4CDD-B94A-C4B2D3A8668D}
	
	MedEDA.its={A3A65FE1-9A5F-40F8-98CE-1FC0386D06C8}
	
	MedEDA00.its={E9638573-3DEA-4867-BF82-37B320397B09}
	
	MedEDA01.its={84D57CDE-70D8-4B37-AA4A-E20BF1E44205}
	
	MedStd.its={2F1C90F3-ED5F-414F-985C-C61BED60239F}
	
	MedStd00.its={A2914F85-7A56-4DF1-993C-02F4547C3485}
	
	MedStd01.its={9465A101-07EF-4517-9A9D-081F23866BDD}
	
	MedDlx.its={529FF6CD-85BE-443E-9CE3-E3245023B633}
	
	MedDlx00.its={59142A73-0356-479E-806C-CFAA128170A7}
	
	MedDlx01.its={C0C99678-D6FC-4159-A02D-6EFB67E5763C}
	
	MedAfr.its={D2C96068-6028-49E9-8D73-57B163FC0913}
	
	MedEwa.its={4A570604-7F9A-48FC-A53B-7494182055B2}
	
	[Sources]
	
	1=1
	
	2=1
	
	3=1
	
	4=1
	
	[.AKC]
	
	ContESA =30
	
	ContEDA =30
	
	ContStd =30
	
	ContDlx =30
	
	ContAfr =30
	
	ContEWA =30
	
	DataESA =0
	
	DataEDA =0
	
	DataStd =0
	
	DataDlx =0
	
	DataAfr =0
	
	DataEWA =0
	
	[.BIN]
	
	FindCSte=0
	
	[.DAT]
	
	FindMSte=0
	
	IndexSte=0
	
	[.MAD]
	
	SWLD_CD =0
	
	SWLD_HD =0
	
	WLD_HD  =0
	
	MAD\WLD_CD=8
	
	[.STR]
	
	IndexSte=0
	
	[.ITS]
	
	Catalog =0
	
	ThumbESA=30
	
	ThumbEDA=30
	
	ThumbStd=30
	
	ThumbDlx=30
	
	ThumbAfr=30
	
	ThumbEwa=30
	
	PiconESA=30
	
	PiconEDA=30
	
	PiconStd=30
	
	PiconDlx=30
	
	PiconAfr=30
	
	PiconEwa=30
	
	MedAll  =30
	
	MedESA  =22
	
	MedESA00=18
	
	MedESA01=20
	
	MedEDA  =22
	
	MedEDA00=18
	
	MedEDA01=20
	
	MedStd  =6
	
	MedStd00=2
	
	MedStd01=4
	
	MedDlx  =6
	
	MedDlx00=2
	
	MedDlx01=4
	
	MedEwa  =8
	
	MedAfr  =16
	
	FindFSte=0
	
	FindWSte=0
	
	WlnkFSte=0
	
	WlnkWSte=0
	
	IDXJSTE =0
	
	FindRSte=0
	
	MsWorld =8
	
	world\7015\05285=2
	
	world\7015\04257=6
	
	world\7015\05916=2
	
	world\7015\05917=6
	
	world\7015\05918=2
	
	world\7015\05919=4
	
	world\7015\05920=4
	
	[.CCT]
	
	dswMedia\IAI\US\0000f0bf=2
	
	dswMedia\IAI\US\00012c06=4
	
	dswMedia\IAI\US\0000eeca=2
	
	dswMedia\IAI\US\0005d8c2=4
	
	dswMedia\IAI\US\00045ad0=4
	
	dswMedia\IAI\US\0005d83a=4
	
	dswMedia\IAI\US\0005d850=4
	
	dswMedia\IAI\US\0005d8e4=4
	
	dswMedia\MCC\US\0000eebb=2
	
	dswMedia\IAI\US\00067d58=6
	
	dswMedia\IAI\US\1dcdfb0b=2
	
	dswMedia\IAI\US\0005bc4d=4
	
	dswMedia\IAI\US\0000f0b0=4
	
	dswMedia\IAI\US\0005d85c=4
	
	dswMedia\IAI\US\00012db9=4
	
	dswMedia\IAI\US\00012be8=4
	
	dswMedia\IAI\US\0005d846=4
	
	dswMedia\MCC\US\0000f039=6
	
	dswMedia\IAI\US\00067d44=2
	
	dswMedia\IAI\US\00012dbb=2
	
	dswMedia\IAI\US\0005d8dc=4
	
	dswMedia\IAI\US\0005d832=4
	
	dswMedia\IAI\US\00012c73=4
	
	dswMedia\IAI\US\0005d8c6=4
	
	dswMedia\IAI\US\00045ad4=4
	
	dswMedia\IAI\US\0005d83e=4
	
	dswMedia\IAI\US\00012d33=4
	
	dswMedia\IAI\US\0005d854=4
	
	dswMedia\IAI\US\0000f0af=4
	
	dswMedia\IAI\US\00012b9a=4
	
	dswMedia\IAI\US\00012c07=4
	
	dswMedia\IAI\US\00012b69=4
	
	dswMedia\MCC\US\0000efa6=6
	
	dswMedia\IAI\US\00012bcc=4
	
	dswMedia\IAI\US\0005d8ea=4
	
	dswMedia\IAI\US\0005d82a=4
	
	dswMedia\IAI\US\00045acc=4
	
	dswMedia\IAI\US\0005d840=4
	
	dswMedia\IAI\US\0000efa1=4
	
	dswMedia\IAI\US\0005bc53=4
	
	dswMedia\IAI\US\00012dbf=4
	
	dswMedia\IAI\US\0005d84c=4
	
	dswMedia\IAI\US\00012dd5=4
	
	dswMedia\IAI\US\0005d862=4
	
	dswMedia\IAI\US\0005d836=4
	
	dswMedia\IAI\US\00045ad8=4
	
	dswMedia\MCC\US\0006a1f6=2
	
	dswMedia\MCC\US\00012bb8=4
	
	dswMedia\IAI\US\0000efa8=2
	
	dswMedia\IAI\US\0005d858=4
	
	dswMedia\IAI\US\0005d8c0=4
	
	dswMedia\IAI\US\00046e67=4
	
	dswMedia\IAI\US\00067d71=2
	
	dswMedia\IAI\US\0005d8cc=4
	
	dswMedia\IAI\US\00012dbc=4
	
	dswMedia\IAI\US\0005bc4b=4
	
	dswMedia\IAI\US\00012dcd=4
	
	dswMedia\IAI\US\0005d8ee=4
	
	dswMedia\IAI\US\0005d82e=4
	
	dswMedia\IAI\US\0005d844=4
	
	dswMedia\IAI\US\00068e7a=4
	
	dswMedia\IAI\US\00012d2f=4
	
	dswMedia\IAI\US\0005d866=4
	
	dswMedia\IAI\US\00045c93=4
	
	dswMedia\IAI\US\00012c08=4
	
	dswMedia\IAI\US\0005d830=4
	
	dswMedia\IAI\US\0005d8c4=4
	
	dswMedia\IAI\US\00012bcd=4
	
	dswMedia\IAI\US\0005d98a=4
	
	dswMedia\IAI\US\00012de0=4
	
	dswMedia\IAI\US\00012d89=4
	
	dswMedia\IAI\US\0005d83c=4
	
	dswMedia\IAI\US\0005d852=4
	
	dswMedia\IAI\US\0005d8e6=4
	
	dswMedia\MCC\US\0000ed38=4
	
	dswMedia\IAI\US\0005c106=4
	
	dswMedia\IAI\US\0005bc39=4
	
	dswMedia\IAI\US\0005d85e=4
	
	dswMedia\IAI\US\00012b6c=4
	
	dswMedia\IAI\US\00012c05=4
	
	dswMedia\IAI\US\00067d50=6
	
	dswMedia\IAI\US\00067d5c=6
	
	dswMedia\IAI\US\00067d6d=2
	
	dswMedia\IAI\US\0000ec5a=2
	
	dswMedia\IAI\US\0005bc51=4
	
	dswMedia\IAI\US\00012bec=4
	
	dswMedia\IAI\US\0005d84a=4
	
	dswMedia\IAI\US\0005d8de=4
	
	dswMedia\MCC\US\0003a0bc=2
	
	dswMedia\IAI\US\0005d860=4
	
	dswMedia\IAI\US\0005d834=4
	
	dswMedia\IAI\US\0005d8c8=4
	
	dswMedia\IAI\US\0000f0c0=2
	
	dswMedia\IAI\US\00012db8=2
	
	dswMedia\IAI\US\0000ed30=4
	
	dswMedia\IAI\US\0005d856=4
	
	dswMedia\IAI\US\0000f0b6=2
	
	dswMedia\IAI\US\00069f73=6
	
	dswMedia\IAI\US\00012d83=4
	
	dswMedia\IAI\US\0000ef60=2
	
	dswMedia\IAI\US\0005d8ca=4
	
	dswMedia\IAI\US\0000ed37=2
	
	dswMedia\IAI\US\0005d8e0=4
	
	dswMedia\IAI\US\00012dba=4
	
	dswMedia\IAI\US\00012c09=4
	
	dswMedia\IAI\US\00067d54=6
	
	dswMedia\IAI\US\0005d8ec=4
	
	dswMedia\IAI\US\0005d82c=4
	
	dswMedia\MCC\US\00012c41=4
	
	dswMedia\IAI\US\0000f092=2
	
	dswMedia\IAI\US\0005d842=4
	
	dswMedia\IAI\US\0005d84e=4
	
	dswMedia\IAI\US\0005d838=4
	
	dswMedia\IAI\US\00012c79=4
	
	[.DCR]
	
	dswMedia\IA\t631722a\t631722a=2
	
	dswMedia\anim\t038726a=4
	
	dswMedia\anim\t048096a=2
	
	dswMedia\anim\t048337a=2
	
	dswMedia\anim\t012903a=2
	
	dswMedia\anim\t045795a=2
	
	dswMedia\IA\t630091a\t630091a=4
	
	dswMedia\anim\t046086a=2
	
	dswMedia\anim\t014855a=4
	
	dswMedia\anim\t045067a=2
	
	dswMedia\anim\t014062a=2
	
	dswMedia\anim\t047517a=2
	
	dswMedia\anim\t045001a=2
	
	dswMedia\IA\t620277a\t620277a=4
	
	dswMedia\anim\t304339a=2
	
	dswMedia\IA\t631316a\t631316a=4
	
	dswMedia\anim\t048092a=2
	
	dswMedia\anim\t012588a=4
	
	dswMedia\anim\t047869a=2
	
	dswMedia\anim\t012742a=6
	
	dswMedia\IA\t631790a\t631790a=2
	
	dswMedia\IA\t620267a\t620267a=2
	
	dswMedia\IA\t041764a\t041764a=2
	
	dswMedia\anim\t047423a=4
	
	dswMedia\anim\t045926a=4
	
	dswMedia\anim\t012919a=2
	
	dswMedia\anim\t014990a=2
	
	dswMedia\anim\t014712a=4
	
	dswMedia\anim\t015000a=2
	
	dswMedia\anim\t014295a=4
	
	dswMedia\IA\t594172a\t594172a=2
	
	dswMedia\IA\t630094a\t630094a=4
	
	dswMedia\MCC\US\t623556a=4
	
	dswMedia\anim\t629161a=4
	
	dswMedia\MCC\US\t620495a=4
	
	dswMedia\anim\t045716a=4
	
	dswMedia\anim\t014809a=6
	
	dswMedia\anim\t013851a=2
	
	dswMedia\anim\t045929a=4
	
	dswMedia\anim\t047912a=2
	
	dswMedia\IA\t630090a\t630090a=6
	
	dswMedia\anim\t012425a=6
	
	dswMedia\anim\t014960a=4
	
	dswMedia\anim\t629068a=4
	
	dswMedia\anim\t628783a=4
	
	dswMedia\anim\t012858a=6
	
	dswMedia\IA\t620266a\t620266a=4
	
	dswMedia\anim\t013967a=2
	
	dswMedia\anim\t304953a=4
	
	dswMedia\anim\t014605a=2
	
	dswMedia\IA\t231689a\t231689a=2
	
	dswMedia\IA\t631773a\t631773a=2
	
	dswMedia\anim\t045909a=2
	
	dswMedia\IA\t620272a\t620272a=4
	
	dswMedia\anim\t046412a=2
	
	dswMedia\anim\t038728a=2
	
	dswMedia\anim\t629070a=4
	
	dswMedia\IA\t631624a\t631624a=4
	
	dswMedia\anim\t045797a=4
	
	dswMedia\IA\t975520a\t975520a=6
	
	dswMedia\IA\t630093a\t630093a=4
	
	dswMedia\anim\t012601a=2
	
	dswMedia\anim\t012977a=2
	
	dswMedia\MCC\US\t623555a=6
	
	dswMedia\anim\t047848a=2
	
	dswMedia\anim\t045003a=2
	
	dswMedia\anim\t012877a=2
	
	dswMedia\anim\t048519a=4
	
	dswMedia\MCC\US\t620494a=4
	
	dswMedia\IA\t631183a\t631183a=4
	
	dswMedia\anim\t048731a=4
	
	dswMedia\anim\t014501a=4
	
	dswMedia\anim\t048094a=2
	
	dswMedia\IA\t620269a\t620269a=6
	
	dswMedia\anim\t014211a=4
	
	dswMedia\anim\t049425a=6
	
	dswMedia\IA\t979063a\t979063a=2
	
	dswMedia\IA\t620275a\t620275a=4
	
	dswMedia\anim\t045521a=2
	
	dswMedia\anim\t013028a=2
	
	dswMedia\IA\t620281a\t620281a=2
	
	dswMedia\anim\t012586a=4
	
	dswMedia\IA\t026328a\t026328a=2
	
	dswMedia\anim\t047867a=6
	
	dswMedia\IA\t631320a\t631320a=2
	
	dswMedia\IA\t630096a\t630096a=4
	
	dswMedia\IA\t620265a\t620265a=2
	
	dswMedia\anim\t014963a=2
	
	dswMedia\anim\t304243a=4
	
	dswMedia\anim\t304952a=4
	
	dswMedia\IA\t631789a\t631789a=2
	
	dswMedia\IA\t620271a\t620271a=6
	
	dswMedia\MCC\US\t623787a=4
	
	dswMedia\anim\t049405a=4
	
	dswMedia\IA\t631723a\t631723a=2
	
	dswMedia\anim\t014847a=2
	
	dswMedia\IA\t631795a\t631795a=2
	
	dswMedia\IA\t631707a\t631707a=2
	
	dswMedia\anim\t045796a=2
	
	dswMedia\anim\t013904a=2
	
	dswMedia\anim\t047518a=6
	
	dswMedia\IA\t620278a\t620278a=4
	
	dswMedia\IA\t631317a\t631317a=2
	
	dswMedia\IA\t631182a\t631182a=4
	
	dswMedia\anim\t048093a=2
	
	dswMedia\anim\t014656a=4
	
	dswMedia\anim\t012589a=2
	
	dswMedia\anim\t045720a=2
	
	dswMedia\IA\t631791a\t631791a=2
	
	dswMedia\IA\t620268a\t620268a=4
	
	dswMedia\anim\t047424a=2
	
	dswMedia\anim\t046134a=2
	
	dswMedia\anim\t012646a=2
	
	dswMedia\IA\t979062a\t979062a=2
	
	dswMedia\anim\t012766a=6
	
	dswMedia\anim\t014833a=6
	
	dswMedia\anim\t013247a=6
	
	dswMedia\anim\t012356a=2
	
	dswMedia\IA\t041755a\t041755a=2
	
	dswMedia\IA\t631798a\t631798a=2
	
	dswMedia\anim\t014926a=4
	
	dswMedia\IA\t053224a\t053224a=6
	
	dswMedia\anim\t047866a=2
	
	dswMedia\IA\t630095a\t630095a=4
	
	dswMedia\IA\t620264a\t620264a=4
	
	dswMedia\IA\t631179a\t631179a=4
	
	dswMedia\anim\t045060a=2
	
	dswMedia\IA\t621387a\t621387a=4
	
	dswMedia\IA\t631788a\t631788a=2
	
	dswMedia\IA\t620270a\t620270a=4
	
	dswMedia\anim\t014916a=2
	
	DSWMEDIA\SHARED\PLAYERS\LAUNCHER=22
	
	DSWMEDIA\SHARED\PLAYERS\IAI\IAIPLAY=22
	
	DSWMEDIA\SHARED\PLAYERS\RFL\RFLPLAY=22
	
	DSWMEDIA\SHARED\PLAYERS\MCC\MCCPLAY=22
	
	DSWMEDIA\SHARED\PLAYERS\IMR\IMRPLAY=22
	
	DSWMEDIA\SHARED\PLAYERS\IIP\IIPPLAY=22
	
	DSWMEDIA\IA\CLIM_CCL\CLIM_CCL=22
	
	DSWMEDIA\IA\POP_CPO\POP_CPO=22
	
	DSWMEDIA\afrCRC\afrCRC=16
	
	DSWMEDIA\afrHome\celebHS=16
	
	DSWMEDIA\afrHome\histHS=16
	
	DSWMEDIA\afrHome\mediaHS=16
	
	DSWMEDIA\afrHome\vtHS=16
	
	DSWMEDIA\AfrLBA\AfrLBA=16
	
	DSWMEDIA\afrMap\AFCC=16
	
	DSWMEDIA\afrMap\diaspora=16
	
	DSWMEDIA\afrMTime\afrmtime=16
	
	DSWMEDIA\afrTime\afrtime=16 
	
	4. On the File menu, click Save.
	
	5. Locate the DiscID.ini file in the following folder on your server, where
	  <path> is the path on your server:
	
	  \<path>\DiscID.ini
	
	6. Open the DiscID.ini file in Notepad, and then replace the contents of the
	  DiscID.ini file on your hard disk with the following text:
	
	[SKU]
	
	Content=ST02ADLXC
	
	Disc=1
	
	NumDiscs=5
	
	7. Click Save on the File menu to save the file.
	
	8. Follow the directions in the "Step 2. Install Encarta products on a
	  workstation" section of the Network Administrator's Guide to install Encarta
	  Reference Library to the client workstations.
	
	  NOTE: If Encarta Reference Library is already installed to the client
	  workstations, remove Encarta Reference Library from each workstation, then
	  follow steps 2 through 8 to update the SuiteCD.ini and DiscID.ini files on
	  the server and reinstall the program to the client workstations.
	
	MORE INFORMATION
	================
	
	For additional information about the minimum system requirements for Encarta
	Reference Library, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q305821 ENC2002: Minimum System Requirements for Encarta
	
	For more information about Encarta Reference Library, visit the following
	Microsoft Web site:
	
	  http://www.encarta.msn.com/shop/ERL.asp
	  (http://www.encarta.msn.com/shop/ERL.asp)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbimu 
	Technology        : kbHomeProdSearch _IKkbbogus kbEncartaSearch kbMMSearch kbEncartaRef2002
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
