---
layout: page
title: "Q194203: ASCII and Hex Representation of NetBIOS Names"
permalink: /kb/194/Q194203/
---

## Q194203: ASCII and Hex Representation of NetBIOS Names

{% raw %}

	Article: Q194203
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): Windows:95,98;WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	NetBIOS names are 16 bytes long, but they are mapped to a 32-byte wide string of
	alphabet (A,B...O,P) using a reversible, half-ASCII, biased encoding.
	
	MORE INFORMATION
	================
	
	The algorithm used to encode NetBIOS names is as follows:
	
	Each half-octet of the NetBIOS name is encoded into 1 byte of the 32-byte field.
	The first half-octet is encoded into the first byte, the second half- octet into
	the second byte, and so on. Each 4-bit, half-octet of the NetBIOS name is
	treated as an 8-bit, right-adjusted, zero-filled binary number. This number is
	added to the value of the ASCII character 'A' (hexadecimal 41). The resulting
	8-bit number is stored in the appropriate byte.
	
	This encoding results in a NetBIOS name being represented as a sequence of 32
	ASCII, upper-case characters from the set {A,B,C...N,O,P}. The NetBIOS scope
	identifier is a valid domain name (without a leading dot).
	
	An ASCII dot (2E hexadecimal) and the scope identifier are appended to the
	encoded form of the NetBIOS name, the result forming a valid domain name.
	
	For example, the NetBIOS name "THE NETBIOS NAME" in the NetBIOS scope
	"SCOPE.ID.COM" would be represented at level one by the ASCII character string:
	
	  FEEIEFCAEOEFFEECEJEPFDCAEOEBENEF.SCOPE.ID.COM
	
	The following is a list of characters and their corresponding encoded ASCII and
	hex values:
	
	  Character   ASCII Code    Hex Code
	  ----------------------------------
	
	  A            EB            45 42
	  B            EC            45 43
	  C            ED            45 44
	  D            EE            45 45
	  E            EF            45 46
	  F            EG            45 47
	  G            EH            45 48
	  H            EI            45 49
	  I            EJ            45 4A
	  J            EK            45 4B
	  K            EL            45 4C
	  L            EM            45 4D
	  M            EN            45 4E
	  N            EO            45 4F
	  O            EP            45 50
	  P            FA            46 41
	  Q            FB            46 42
	  R            FC            46 43
	  S            FD            46 44
	  T            FE            46 45
	  U            FF            46 46
	  V            FG            46 47
	  W            FH            46 48
	  X            FI            46 49
	  Y            FJ            46 4A
	  Z            FK            46 4B
	
	  0            DA            44 41
	  1            DB            44 42
	  2            DC            44 43
	  3            DD            44 44
	  4            DE            44 45
	  5            DF            44 46
	  6            DG            44 47
	  7            DH            44 48
	  8            DI            44 49
	  9            DJ            44 4A
	
	  <space>      CA            43 41
	  !            CB            43 42
	  "            CC            43 43
	  #            CD            43 44
	  $            CE            43 45
	  %            CF            43 46
	  &            CG            43 47
	  '            CH            43 48
	  (            CI            43 49
	  )            CJ            43 4A
	  *            CK            43 4B
	  +            CL            43 4C
	  ,(comma)     CM            43 4D
	  -(hyphen)    CN            43 4E
	  .(period)    CO            43 4F
	  =            DN            44 4E
	  :(colon)     DK            44 4B
	  ;(semicolon) DL            44 4C
	  @            EA            45 41
	  ^            FO            46 4F
	  _(underscore)FP            46 50
	  {            HL            48 4C
	  }            HN            48 4E
	  ~            HO            48 4F
	
	NOTE: The above mapping list can be useful while reading network traces because
	information is sent on the wire in the above encoded format.
	
	REFERENCES
	==========
	
	For more information, see RFC 1001.
	
	Additional query words: kbDSupport NetBIOS Name Character Encoded Hex ASCII
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : Windows:95,98;WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
