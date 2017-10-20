---
layout: page
title: "Q243604: XGEN: File Versions for Exchange 5.5, 5.5 SP1,5.5 SP2, &amp; 5.5 SP3"
permalink: /kb/243/Q243604/
---

## Q243604: XGEN: File Versions for Exchange 5.5, 5.5 SP1,5.5 SP2, &amp; 5.5 SP3

{% raw %}

	Article: Q243604
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 exc55sp3
	Last Modified: 25-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article details the important Exchange Server .exe and .dll files for the
	base Exchange Server 5.5 Enterprise Edition and for each of the three service
	packs. The details have been extracted using the Filever utility. This assumes
	that no hotfixes have been applied subsequent to the initial installation or
	after each application a service pack.
	
	MORE INFORMATION
	================
	
	NOTE: This list is NOT COMPREHENSIVE, and lists only KEY .exe and .dll files in
	the Exchsrvr\Bin and Winnt\System32 folders. It does not list .dll and .exe
	files in the other Exchange Server folders. Also, the Cdonts.dll file may be of
	a different version than the one shown, depending on the Windows NT service pack
	level on your server. The dates shown are the MODIFICATION dates. Consequently,
	some of the files on your server may have different dates (usually the date of
	installation).
	
	Exchange Server 5.5 Base (No Service Pack) .exe File Versions
	-------------------------------------------------------------
	
	D:\Exchsrvr\Bin\Admin.exe     2,439,440      10/21/99       5.5.1960.5
	D:\Exchsrvr\Bin\Dsamain.exe     508,176      10/21/99       5.5.1960.6
	D:\Exchsrvr\Bin\Dxa.exe         279,312      10/21/99       5.5.1960.3
	D:\Exchsrvr\Bin\Edbutil.exe       7,952      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Emsmta.exe    1,886,992      10/21/99       5.5.1960.3
	D:\Exchsrvr\Bin\Events.exe      136,464      11/4/97        5.5.1960.3
	D:\Exchsrvr\Bin\Exchins.exe     147,216      11/4/97        5.5.1960.3
	D:\Exchsrvr\Bin\Gwbif.exe        16,896      11/4/97        5.5.1940.0
	D:\Exchsrvr\Bin\Isinteg.exe     325,904      11/4/97        5.5.1960.3
	D:\Exchsrvr\Bin\Mad.exe         554,768      10/21/99       5.5.1960.5
	D:\Exchsrvr\Bin\Mailmig.exe      16,656      10/21/99       5.5.1960.3
	D:\Exchsrvr\Bin\Mtacheck.exe    162,576      11/4/97        5.5.1960.3
	D:\Exchsrvr\Bin\Perfwiz.exe     100,112      10/21/99       5.5.1960.5
	D:\Exchsrvr\Bin\Store.exe     2,624,272      10/21/99       5.5.1960.6
	D:\Winnt\System32\Eseutil.exe   47,888      11/04/97       5.0.1458.47
	
	Exchange Server 5.5 Base .dll File Versions 
	-------------------------------------------
	
	D:\Exchsrvr\Bin\Address.dll      25,360      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Cdohtml.dll     503,056      11/04/97       5.5.1960.4
	D:\Exchsrvr\Bin\Dracheck.dll     94,992      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Dramapi.dll      19,216      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Dxamsg.dll      116,496      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Ems_rid.dll      68,880      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Esconf.dll      113,424      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Ewsperf.dll      10,512      11/04/97       5.5.1960.4
	D:\Exchsrvr\Bin\Fradm32.dll     125,200      11/04/97       8.0.1960.3
	D:\Exchsrvr\Bin\Gwexch.dll       71,344      11/04/97       5.5.1957.0
	D:\Exchsrvr\Bin\Gwperf.dll       15,632      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Imsperf.dll      13,584      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Isatq.dll        22,800      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Kmsadmin.dll     50,448      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Madmsg.dll       52,496      11/04/97       5.5.1960.5
	D:\Exchsrvr\Bin\Mailumx.dll     937,744      10/21/99       5.5.1960.5
	D:\Exchsrvr\Bin\Maxapia.dll      19,728      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Maxapiv1.dll     12,048      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Mdbperf.dll      13,584      11/04/97       5.5.1960.6
	D:\Exchsrvr\Bin\Mdbperfx.dll     13,584      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Mdbrest.dll     181,520      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Mdbsz.dll       449,808      11/04/97       5.5.1960.6
	D:\Exchsrvr\Bin\Mlmig32.dll     659,728      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Mmiext.dll       33,040      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Msesperf.dll      9,488      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Mtaperf.dll      16,144      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Mtxapia.dll      16,656      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Mtxapiv1.dll     11,536      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Netif.dll        63,248      11/04/97       5.5.1960.6
	D:\Exchsrvr\Bin\Oabgen.dll       45,840      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Pbag.dll         37,648      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Perfdsa.dll      11,024      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Register.dll     29,456      11/04/97       5.5.1960.4
	D:\Exchsrvr\Bin\Scripto.dll      49,424      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Secadmin.dll    216,336      11/04/97       5.0.1457.3
	D:\Exchsrvr\Bin\Seckm.dll        12,560      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Ss.dll           91,920      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\X400om.dll      320,784      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\X400omv1.dll     39,696      11/04/97       5.5.1960.3
	
	D:\Winnt\System32\Cdo.dll       790,800      11/04/97       5.5.1960.6
	D:\Winnt\System32\Cdonts.dll    277,776      11/04/97       5.5.1774.11
	D:\Winnt\System32\Dapi.dll      342,800      11/04/97       5.5.1960.5
	D:\Winnt\System32\Edbbcli.dll    31,504      11/04/97       5.5.1960.3
	D:\Winnt\System32\Emsabp32.dll  121,104      11/04/97       5.5.1960.3
	D:\Winnt\System32\Emsmdb32.dll  524,048      11/04/97       5.5.1960.3
	D:\Winnt\System32\Emsui32.dll   121,616      11/04/97       5.5.1960.3
	D:\Winnt\System32\Emsuix32.dll  555,280      11/04/97       8.0.1960.3
	D:\Winnt\System32\Escprint.dll    8,464      11/04/97       5.5.1960.3
	D:\Winnt\System32\Ese.dll       768,272      11/04/97       5.5.1960.3
	D:\Winnt\System32\Eseback.dll    28,944      11/04/97       5.5.1960.3
	D:\Winnt\System32\Eseperf.dll    16,656      11/04/97       5.5.1960.3
	D:\Winnt\System32\Exchfilt.dll   11,024      11/04/97       5.5.1960.4
	D:\Winnt\System32\Exchmem.dll    12,048      11/04/97       5.5.1960.3
	D:\Winnt\System32\Exstrace.dll   15,632      11/04/97       5.5.1774.11
	D:\Winnt\System32\Gapi32.dll     87,824      11/04/97       5.5.1960.3
	D:\Winnt\System32\Libxds.dll     87,312      11/04/97       5.5.1960.3
	D:\Winnt\System32\Mapi.dll      494,688      10/14/96       4.0.835.993
	D:\Winnt\System32\Mapi32.dll    873,744      11/04/97       5.5.1960.3
	D:\Winnt\System32\Mapiu.dll       5,440      10/14/96       4.0.835.993
	D:\Winnt\System32\Mapiu32.dll     6,928      10/14/96       4.0.835.1374
	D:\Winnt\System32\Mapix.dll       4,544      10/14/96       4.0.835.993
	D:\Winnt\System32\Mapix32.dll     8,976      10/14/96       4.0.835.1374
	D:\Winnt\System32\Minet32.dll   225,040      10/15/98       4.40.837.1381
	D:\Winnt\System32\Mmfmig32.dll  272,144      11/04/97       5.5.1960.4
	D:\Winnt\System32\Msfs32.dll    545,040      11/04/97       5.0.1459.2
	D:\Winnt\System32\Mspst32.dll   582,416      11/04/97       5.5.1960.3
	D:\Winnt\System32\Wgpoadmn.dll   87,312      10/14/96       4.0.835.1374
	D:\Winnt\System32\Wmsfr32.dll   254,736      10/14/96       4.0.540.993
	D:\Winnt\System32\Wmsui32.dll   1208080      11/04/97       5.0.1458.47
	
	Service Pack 1 .exe File Versions
	---------------------------------
	
	D:\Exchsrvr\Bin\Admin.exe     2,486,544      10/22/99       5.5.2232.17
	D:\Exchsrvr\Bin\Dsamain.exe     509,712      10/22/99       5.5.2232.4
	D:\Exchsrvr\Bin\Dxa.exe         279,824      10/22/99       5.5.2232.0
	D:\Exchsrvr\Bin\Edbutil.exe       7,952      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Emsmta.exe    1,914,128      10/22/99       5.5.2232.18
	D:\Exchsrvr\Bin\Events.exe      136,976      07/24/98       5.5.2232.4
	D:\Exchsrvr\Bin\Exchins.exe     147,216      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Gwbif.exe        16,896      11/04/97       5.5.1940.0
	D:\Exchsrvr\Bin\Isinteg.exe     327,440      07/24/98       5.5.2232.1
	D:\Exchsrvr\Bin\Mad.exe         557,328      10/22/99       5.5.2232.17
	D:\Exchsrvr\Bin\Mailmig.exe      16,656      10/22/99       5.5.1960.3
	D:\Exchsrvr\Bin\Mtacheck.exe    163,088      07/24/98       5.5.2232.18
	D:\Exchsrvr\Bin\Perfwiz.exe     100,112      10/22/99       5.5.2232.17
	D:\Exchsrvr\Bin\Store.exe     2,635,536      10/22/99       5.5.2232.11
	D:\Winnt\System32\Eseutil.exe   33,552      07/24/98       5.5.2232.0
	
	Service Pack 1 .dll File Versions 
	---------------------------------
	
	D:\Exchsrvr\Bin\Address.dll      25,360      07/24/98       5.5.2232.18
	D:\Exchsrvr\Bin\Cdohtml.dll     524,048      07/24/98       5.5.2232.5
	D:\Exchsrvr\Bin\Ctreestd.dll    208,144      07/24/98       5.5.2232.0
	D:\Exchsrvr\Bin\Dracheck.dll     94,992      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Dramapi.dll      19,216      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Dxamsg.dll      116,496      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Ems_Rid.dll      69,904      07/24/98       5.5.2232.18
	D:\Exchsrvr\Bin\Esconf.dll      113,424      07/24/98       5.5.2232.4
	D:\Exchsrvr\Bin\Ewsperf.dll      10,512      11/04/97       5.5.1960.4
	D:\Exchsrvr\Bin\Exrteng.dll      98,064      07/24/98       5.5.2232.4
	D:\Exchsrvr\Bin\Exrtobj.dll      98,576      07/24/98       5.5.2232.4
	D:\Exchsrvr\Bin\Fradm32.dll     125,200      11/04/97       8.0.1960.3
	D:\Exchsrvr\Bin\Gwexch.dll       71,344      11/04/97       5.5.1957.0
	D:\Exchsrvr\Bin\Gwperf.dll       15,632      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Imsperf.dll      13,584      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Isatq.dll        22,800      07/24/98       5.5.2232.1
	D:\Exchsrvr\Bin\Kmsadmin.dll     64,272      07/24/98       5.5.2232.0
	D:\Exchsrvr\Bin\Lscms.dll       155,920      07/24/98       5.5.2232.0
	D:\Exchsrvr\Bin\Lscps.dll       139,536      07/24/98       5.5.2232.0
	D:\Exchsrvr\Bin\Lsntshc.dll     190,736      07/24/98       5.5.2232.0
	D:\Exchsrvr\Bin\Madmsg.dll       52,496      11/04/97       5.5.1960.5
	D:\Exchsrvr\Bin\Mailumx.dll     962,320      10/22/99       5.5.2232.17
	D:\Exchsrvr\Bin\Maxapia.dll      19,728      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Maxapiv1.dll     12,048      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Mdbperf.dll      13,584      07/24/98       5.5.2232.11
	D:\Exchsrvr\Bin\Mdbperfx.dll     13,584      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Mdbrest.dll     182,032      07/24/98       5.5.2232.1
	D:\Exchsrvr\Bin\Mdbsz.dll       508,176      07/24/98       5.5.2232.11
	D:\Exchsrvr\Bin\Mlmig32.dll     717,584      07/24/98       5.5.2232.2
	D:\Exchsrvr\Bin\Mlmignts.dll     61,200      07/24/98       5.5.2232.2
	D:\Exchsrvr\Bin\Mmiext.dll       33,040      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Msesperf.dll      9,488      07/24/98       5.5.2232.4
	D:\Exchsrvr\Bin\Mtaperf.dll      16,144      07/24/98       5.5.2232.18
	D:\Exchsrvr\Bin\Mtxapia.dll      16,656      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Mtxapiv1.dll     11,536      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Netif.dll        63,248      07/24/98       5.5.2232.11
	D:\Exchsrvr\Bin\Oabgen.dll       46,352      07/24/98       5.5.2232.0
	D:\Exchsrvr\Bin\Pbag.dll         37,648      07/24/98       5.5.2232.4
	D:\Exchsrvr\Bin\Perfdsa.dll      11,024      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Register.dll     29,456      11/04/97       5.5.1960.4
	D:\Exchsrvr\Bin\Scripto.dll      49,424      07/24/98       5.5.2232.4
	D:\Exchsrvr\Bin\Secadmin.dll    216,336      11/04/97       5.0.1457.3
	D:\Exchsrvr\Bin\Seckm.dll        13,072      07/24/98       5.5.2232.0
	D:\Exchsrvr\Bin\Ss.dll           91,920      07/24/98       5.5.2232.4
	D:\Exchsrvr\Bin\X400om.dll      322,320      07/24/98       5.5.2232.18
	D:\Exchsrvr\Bin\X400omv1.dll     40,208      07/24/98       5.5.2232.18
	
	D:\Winnt\System32\Cdo.dll       794,384      07/24/98       5.5.2232.0
	D:\Winnt\System32\Cdonts.dll    277,776      11/04/97       5.5.1774.11
	D:\Winnt\System32\Dapi.dll      354,576      07/24/98       5.5.2232.17
	D:\Winnt\System32\Edbbcli.dll    31,504      07/24/98       5.5.2232.0
	D:\Winnt\System32\Emsabp32.dll  126,224      07/24/98       5.5.2232.0
	D:\Winnt\System32\Emsmdb32.dll  539,408      07/24/98       5.5.2232.1
	D:\Winnt\System32\Emsui32.dll   121,616      11/04/97       5.5.1960.3
	D:\Winnt\System32\Emsuix32.dll  555,280      11/04/97       8.0.1960.3
	D:\Winnt\System32\Escprint.dll    8,464      07/24/98       5.5.2232.1
	D:\Winnt\System32\Ese.dll       793,360      07/24/98       5.5.2232.13
	D:\Winnt\System32\Eseback.dll    28,944      07/24/98       5.5.2232.0
	D:\Winnt\System32\Eseperf.dll    16,656      07/24/98       5.5.2232.0
	D:\Winnt\System32\Exchfilt.dll   11,024      11/04/97       5.5.1960.4
	D:\Winnt\System32\Exchmem.dll    12,048      07/24/98       5.5.2232.0
	D:\Winnt\System32\Exstrace.dll   15,632      11/04/97       5.5.1774.11
	D:\Winnt\System32\Gapi32.dll     89,360      07/24/98       5.5.2232.0
	D:\Winnt\System32\Libxds.dll     87,312      07/24/98       5.5.2232.0
	D:\Winnt\System32\Mapi.dll      494,688      10/14/96       4.0.835.993
	D:\Winnt\System32\Mapi32.dll    877,328      07/24/98       5.5.2232.0
	D:\Winnt\System32\Mapiu.dll       5,440      10/14/96       4.0.835.993
	D:\Winnt\System32\Mapiu32.dll     6,928      10/14/96       4.0.835.1374
	D:\Winnt\System32\Mapix.dll       4,544      10/14/96       4.0.835.993
	D:\Winnt\System32\Mapix32.dll     8,976      10/14/96       4.0.835.1374
	D:\Winnt\System32\Minet32.dll   225,040      10/15/98       4.40.837.1381
	D:\Winnt\System32\Mmfmig32.dll  272,144      11/04/97       5.5.1960.4
	D:\Winnt\System32\Msfs32.dll    526,608      07/24/98       5.5.2232.0
	D:\Winnt\System32\Mspst32.dll   582,416      11/04/97       5.5.1960.3
	D:\Winnt\System32\Wgpoadmn.dll   87,312      10/14/96       4.0.835.1374
	D:\Winnt\System32\Wmsfr32.dll   254,736      10/14/96       4.0.540.993
	D:\Winnt\System32\Wmsui32.dll   1208080      11/04/97       5.0.1458.47
	
	Service Pack 2 .exe File Versions
	---------------------------------
	
	D:\Exchsrvr\Bin\Admin.exe     2,501,392      10/22/99       5.5.2448.8
	D:\Exchsrvr\Bin\Dsamain.exe     510,736      10/22/99       5.5.2448.1
	D:\Exchsrvr\Bin\Dxa.exe         280,848      10/22/99       5.5.2448.0
	D:\Exchsrvr\Bin\Edbutil.exe       7,952      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Emsmta.exe    1,920,272      10/22/99       5.5.2448.1
	D:\Exchsrvr\Bin\Events.exe      133,904      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Exchins.exe     148,240      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Gw5mig.exe       15,120      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Gwbif.exe        16,896      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Isinteg.exe     327,952      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Mad.exe         557,328      10/22/99       5.5.2448.8
	D:\Exchsrvr\Bin\Mailmig.exe      16,656      10/22/99       5.5.2448.0
	D:\Exchsrvr\Bin\Mtacheck.exe    163,600      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Perfwiz.exe     100,112      10/22/99       5.5.2448.8
	D:\Exchsrvr\Bin\Store.exe     2,657,552      10/22/99       5.5.2448.8
	D:\Winnt\System32\Eseutil.exe   34,576      12/17/98       5.5.2448.0
	
	Service Pack 2 .dll File Versions
	---------------------------------
	
	D:\Exchsrvr\Bin\Address.dll      25,360      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Cdohtml.dll     527,632      12/17/98       5.5.2448.4
	D:\Exchsrvr\Bin\Ctreestd.dll    208,144      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Dracheck.dll     94,992      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Dramapi.dll      19,216      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Dxamsg.dll      116,496      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Ems_Rid.dll      70,416      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Esconf.dll      113,424      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Ewsperf.dll      10,512      11/04/97       5.5.1960.4
	D:\Exchsrvr\Bin\Exrteng.dll      98,064      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Exrtobj.dll      99,600      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Fradm32.dll     125,200      11/04/97       8.0.1960.3
	D:\Exchsrvr\Bin\Gwexch.dll       71,360      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Gwperf.dll       15,632      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Imsperf.dll      13,584      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Isatq.dll        22,800      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Kmsadmin.dll     65,296      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Lscms.dll       159,504      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Lscps.dll       222,992      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Lsntshc.dll     202,512      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Madmsg.dll       52,496      11/04/97       5.5.1960.5
	D:\Exchsrvr\Bin\Mailumx.dll     970,512      10/22/99       5.5.2448.8
	D:\Exchsrvr\Bin\Maxapia.dll      19,728      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Maxapiv1.dll     12,048      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Mdbperf.dll      13,584      12/17/98       5.5.2448.8
	D:\Exchsrvr\Bin\Mdbperfx.dll     13,584      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Mdbrest.dll     182,032      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Mdbsz.dll       532,240      12/17/98       5.5.2448.8
	D:\Exchsrvr\Bin\Mlmig32.dll     857,360      12/17/98       5.5.2448.4
	D:\Exchsrvr\Bin\Mlmignts.dll     66,832      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Mmiext.dll       33,040      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Msesperf.dll      9,488      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Mtaperf.dll      16,144      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Mtxapia.dll      16,656      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Mtxapiv1.dll     11,536      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Netif.dll        63,248      12/17/98       5.5.2448.8
	D:\Exchsrvr\Bin\Oabgen.dll       46,864      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Pbag.dll         37,648      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Perfdsa.dll      11,024      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Register.dll     29,456      11/04/97       5.5.1960.4
	D:\Exchsrvr\Bin\Scripto.dll      49,936      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Secadmin.dll    216,336      11/04/97       5.0.1457.3
	D:\Exchsrvr\Bin\Seckm.dll        13,072      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\Ss.dll           91,920      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\X400om.dll      322,320      12/17/98       5.5.2448.0
	D:\Exchsrvr\Bin\X400omv1.dll     40,208      12/17/98       5.5.2448.0
	
	D:\Winnt\System32\Cdo.dll       794,896      12/17/98       5.5.2448.0
	D:\Winnt\System32\Cdonts.dll    277,776      11/04/97       5.5.1774.11
	D:\Winnt\System32\Dapi.dll      354,576      12/17/98       5.5.2448.8
	D:\Winnt\System32\Edbbcli.dll    31,504      12/17/98       5.5.2448.0
	D:\Winnt\System32\Emsabp32.dll  134,928      12/17/98       5.5.2448.0
	D:\Winnt\System32\Emsmdb32.dll  555,792      12/17/98       5.5.2448.0
	D:\Winnt\System32\Emsui32.dll   126,224      12/17/98       5.5.2448.0
	D:\Winnt\System32\Emsuix32.dll  555,280      11/04/97       8.0.1960.3
	D:\Winnt\System32\Escprint.dll    8,464      12/17/98       5.5.2448.0
	D:\Winnt\System32\Ese.dll       814,352      12/17/98       5.5.2448.2
	D:\Winnt\System32\Eseback.dll    28,944      12/17/98       5.5.2448.0
	D:\Winnt\System32\Eseperf.dll    16,144      12/17/98       5.5.2448.0
	D:\Winnt\System32\Exchfilt.dll   11,024      11/04/97       5.5.1960.4
	D:\Winnt\System32\Exchmem.dll    12,048      12/17/98       5.5.2448.0
	D:\Winnt\System32\Exstrace.dll   15,632      11/04/97       5.5.1774.11
	D:\Winnt\System32\Gapi32.dll     89,360      12/17/98       5.5.2448.2
	D:\Winnt\System32\Libxds.dll     87,312      12/17/98       5.5.2448.0
	D:\Winnt\System32\Mapi.dll      494,688      10/14/96       4.0.835.993
	D:\Winnt\System32\Mapi32.dll    879,376      12/17/98       5.5.2448.0
	D:\Winnt\System32\Mapiu.dll       5,440      10/14/96       4.0.835.993
	D:\Winnt\System32\Mapiu32.dll     6,928      10/14/96       4.0.835.1374
	D:\Winnt\System32\Mapix.dll       4,544      10/14/96       4.0.835.993
	D:\Winnt\System32\Mapix32.dll     8,976      10/14/96       4.0.835.1374
	D:\Winnt\System32\Minet32.dll   225,040      10/15/98       4.40.837.1381
	D:\Winnt\System32\Mmfmig32.dll  272,144      11/04/97       5.5.1960.4
	D:\Winnt\System32\Msfs32.dll    527,120      12/17/98       5.5.2448.0
	D:\Winnt\System32\Mspst32.dll   582,416      11/04/97       5.5.1960.3
	D:\Winnt\System32\Wgpoadmn.dll   87,312      10/14/96       4.0.835.1374
	D:\Winnt\System32\Wmsfr32.dll   254,736      10/14/96       4.0.540.993
	D:\Winnt\System32\Wmsui32.dll   1208080      11/04/97       5.0.1458.47
	
	Service Pack 3 .exe File Versions 
	---------------------------------
	
	D:\Exchsrvr\Bin\Admin.exe     2,504,464      10/22/99       5.5.2650.24
	D:\Exchsrvr\Bin\Dsamain.exe     511,760      10/22/99       5.5.2650.14
	D:\Exchsrvr\Bin\Dxa.exe         288,016      10/22/99       5.5.2650.12
	D:\Exchsrvr\Bin\Edbutil.exe       7,952      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Emsmta.exe    1,946,896      10/22/99       5.5.2650.24
	D:\Exchsrvr\Bin\Events.exe      133,904      09/01/99       5.5.2650.12
	D:\Exchsrvr\Bin\Exchins.exe     148,240      09/01/99       5.5.2650.12
	D:\Exchsrvr\Bin\Gw5mig.exe       15,632      09/01/99       5.5.2650.12
	D:\Exchsrvr\Bin\Gwbif.exe        16,896      09/01/99       5.5.2650.12
	D:\Exchsrvr\Bin\Isinteg.exe     328,976      09/01/99       5.5.2650.23
	D:\Exchsrvr\Bin\Mad.exe         557,328      10/22/99       5.5.2650.24
	D:\Exchsrvr\Bin\Mailmig.exe      17,168      10/22/99       5.5.2650.12
	D:\Exchsrvr\Bin\Mtacheck.exe    164,112      09/01/99       5.5.2650.24
	D:\Exchsrvr\Bin\Perfwiz.exe     100,624      10/22/99       5.5.2650.24
	D:\Exchsrvr\Bin\Store.exe     2,670,864      10/22/99       5.5.2650.23
	D:\Winnt\System32\Eseutil.exe   34,064      08/31/99       5.5.2650.17
	
	Service Pack 3 .dll File Versions
	---------------------------------
	
	D:\Exchsrvr\Bin\Address.dll      25,872      09/01/99       5.5.2650.24
	D:\Exchsrvr\Bin\Cdohtml.dll     530,192      09/01/99       5.5.2650.24
	D:\Exchsrvr\Bin\Ctreestd.dll    208,144      09/01/99       5.5.2650.20
	D:\Exchsrvr\Bin\Dracheck.dll     94,992      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Dramapi.dll      19,216      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Dxamsg.dll      116,496      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Ems_Rid.dll      69,392      09/01/99       5.5.2650.24
	D:\Exchsrvr\Bin\Esconf.dll      113,424      09/01/99       5.5.2650.12
	D:\Exchsrvr\Bin\Ewsperf.dll      10,512      11/04/97       5.5.1960.4
	D:\Exchsrvr\Bin\Exrteng.dll      98,064      09/01/99       5.5.2650.12
	D:\Exchsrvr\Bin\Exrtobj.dll      99,600      09/01/99       5.5.2650.12
	D:\Exchsrvr\Bin\Fradm32.dll     125,200      09/01/99       8.30.2650.12
	D:\Exchsrvr\Bin\Gwexch.dll       71,360      09/01/99       5.5.2650.12
	D:\Exchsrvr\Bin\Gwperf.dll       15,632      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Imsperf.dll      13,584      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Isatq.dll        22,800      09/01/99       5.5.2650.23
	D:\Exchsrvr\Bin\Kmsadmin.dll     65,296      09/01/99       5.5.2650.12
	D:\Exchsrvr\Bin\Lscms.dll       167,184      09/01/99       5.5.2650.20
	D:\Exchsrvr\Bin\Lscps.dll       238,352      09/01/99       5.5.2650.20
	D:\Exchsrvr\Bin\Lsntshc.dll     204,560      09/01/99       5.5.2650.20
	D:\Exchsrvr\Bin\Madmsg.dll       52,496      11/04/97       5.5.1960.5
	D:\Exchsrvr\Bin\Mailumx.dll     971,536      10/22/99       5.5.2650.24
	D:\Exchsrvr\Bin\Maxapia.dll      19,728      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Maxapiv1.dll     12,048      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Mdbperf.dll      13,584      09/01/99       5.5.2650.23
	D:\Exchsrvr\Bin\Mdbperfx.dll     13,584      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Mdbrest.dll     182,032      09/01/99       5.5.2650.23
	D:\Exchsrvr\Bin\Mdbsz.dll       532,240      09/01/99       5.5.2650.23
	D:\Exchsrvr\Bin\Mlmig32.dll     909,584      09/01/99       5.5.2650.12
	D:\Exchsrvr\Bin\Mlmigad.dll      17,168      09/01/99       5.5.2650.12
	D:\Exchsrvr\Bin\Mlmignts.dll     69,392      09/01/99       5.5.2650.12
	D:\Exchsrvr\Bin\Mmiext.dll       33,040      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Msesperf.dll      9,488      09/01/99       5.5.2650.12
	D:\Exchsrvr\Bin\Mtaperf.dll      16,144      09/01/99       5.5.2650.24
	D:\Exchsrvr\Bin\Mtxapia.dll      16,656      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Mtxapiv1.dll     11,536      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Netif.dll        64,272      09/01/99       5.5.2650.23
	D:\Exchsrvr\Bin\Oabgen.dll       46,864      09/01/99       5.5.2650.12
	D:\Exchsrvr\Bin\Pbag.dll         37,648      09/01/99       5.5.2650.12
	D:\Exchsrvr\Bin\Perfdsa.dll      11,024      11/04/97       5.5.1960.3
	D:\Exchsrvr\Bin\Register.dll     29,456      11/04/97       5.5.1960.4
	D:\Exchsrvr\Bin\Scripto.dll      49,936      09/01/99       5.5.2650.12
	D:\Exchsrvr\Bin\Secadmin.dll    216,336      11/04/97       5.0.1457.3
	D:\Exchsrvr\Bin\Seckm.dll        13,072      09/01/99       5.5.2650.12
	D:\Exchsrvr\Bin\Ss.dll           91,920      09/01/99       5.5.2650.12
	D:\Exchsrvr\Bin\X400om.dll      322,320      09/01/99       5.5.2650.24
	D:\Exchsrvr\Bin\X400omv1.dll     40,208      09/01/99       5.5.2650.24
	
	D:\Winnt\System32\Cdo.dll       796,432      09/01/99       5.5.2650.12
	D:\Winnt\System32\Cdonts.dll    278,800      09/01/99       5.5.1877.30
	D:\Winnt\System32\Dapi.dll      354,576      09/01/99       5.5.2650.24
	D:\Winnt\System32\Edbbcli.dll    31,504      09/01/99       5.5.2650.17
	D:\Winnt\System32\Emsabp32.dll  138,000      09/01/99       5.5.2650.12
	D:\Winnt\System32\Emsmdb32.dll  553,744      09/01/99       5.5.2650.23
	D:\Winnt\System32\Emsui32.dll   126,224      09/01/99       5.5.2650.21
	D:\Winnt\System32\Emsuix32.dll  555,280      11/04/97       8.0.1960.3
	D:\Winnt\System32\Escprint.dll    8,976      09/01/99       5.5.2650.23
	D:\Winnt\System32\Ese.dll       817,424      09/01/99       5.5.2650.17
	D:\Winnt\System32\Eseback.dll    28,944      09/01/99       5.5.2650.17
	D:\Winnt\System32\Eseperf.dll    16,144      09/01/99       5.5.2650.17
	D:\Winnt\System32\Exchfilt.dll   11,024      11/04/97       5.5.1960.4
	D:\Winnt\System32\Exchmem.dll    12,048      09/01/99       5.5.2650.12
	D:\Winnt\System32\Exstrace.dll   15,632      11/04/97       5.5.1774.11
	D:\Winnt\System32\Gapi32.dll     89,872      09/01/99       5.5.2650.12
	D:\Winnt\System32\Libxds.dll     87,312      09/01/99       5.5.2650.12
	D:\Winnt\System32\Mapi.dll      494,688      10/14/96       4.0.835.993
	D:\Winnt\System32\Mapi32.dll    881,424      09/01/99       5.5.2650.12
	D:\Winnt\System32\Mapiu.dll       5,440      10/14/96       4.0.835.993
	D:\Winnt\System32\Mapiu32.dll     6,928      10/14/96       4.0.835.1374
	D:\Winnt\System32\Mapix.dll       4,544      10/14/96       4.0.835.993
	D:\Winnt\System32\Mapix32.dll     8,976      10/14/96       4.0.835.1374
	D:\Winnt\System32\Minet32.dll   225,040      10/15/98       4.40.837.1381
	D:\Winnt\System32\Mmfmig32.dll  272,144      11/04/97       5.5.1960.4
	D:\Winnt\System32\Msfs32.dll    527,120      09/01/99       5.5.2650.12
	D:\Winnt\System32\Mspst32.dll   582,416      11/04/97       5.5.1960.3
	D:\Winnt\System32\Wgpoadmn.dll   87,312      10/14/96       4.0.835.1374
	D:\Winnt\System32\Wmsfr32.dll   254,736      10/14/96       4.0.540.993
	D:\Winnt\System32\Wmsui32.dll   1208080      11/04/97       5.0.1458.47
	
	Additional Information Regarding the Cdonts.dll File
	----------------------------------------------------
	
	The version of the Cdonts.dll file available on a given Exchange Server 5.5
	installation depends on BOTH the version of the Windows NT service pack AND the
	version of the Exchange Server 5.5 service pack applied on that server. The
	sequence of service pack application also decides which version of the
	Cdonts.dll file is on your system. The various Cdonts.dll file versions are
	documented below:
	
	Cdo.dll and Cdonts.dll for Exchange Server 5.5, No Service Packs:
	
	D:\Winnt\System32\Cdo.dll       790,800     11/04/97       5.5.1960.6
	D:\Winnt\System32\Cdonts.dll    277,776     11/04/97       5.5.1774.11
	
	Cdo.dll and Cdonts.dll for Exchange Server 5.5 Service Pack 1:
	
	D:\Winnt\System32\Cdo.dll       794,384     07/24/98       5.5.2232.0
	D:\Winnt\System32\Cdonts.dll    277,776     11/04/97       5.5.1774.11
	
	Cdo.dll and Cdonts.dll for Exchange Server 5.5 Service Pack 2:
	
	D:\Winnt\System32\Cdo.dll       794,896     12/17/98       5.5.2248.0
	D:\Winnt\System32\Cdonts.dll    277,776     11/04/97       5.5.1774.11
	
	Cdo.dll and Cdonts.dll for Exchange Server 5.5 Service Pack 3:
	
	D:\Winnt\System32\Cdo.dll      794,432     09/01/99       5.5.2650.12
	D:\Winnt\System32\Cdonts.dll   278,800     09/01/99       5.5.1877.30
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q183713 XADM: How To Use Filever.exe To Verify File Versions
	
	  Q166349 XGEN: Microsoft Exchange Server, Exchange Client, and Outlook Version
	  Numbers
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 exc55sp3 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3
	Version           : winnt:5.5,5.5 SP1,5.5 SP2,5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
