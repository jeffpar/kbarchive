---
layout: page
title: "Q234674: Character Mappings Are Incorrect for Four Definitions"
permalink: /kb/234/Q234674/
---

## Q234674: Character Mappings Are Incorrect for Four Definitions

	Article: Q234674
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,3.0SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0SP1, 3.0SP2, 3.0SP3, 3.0SP4 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	PDF files may have a Character Definitions section that performs an ASCII to
	ASCII conversion of a host printer data stream after the original EBCDIC
	characters are converted to ASCII characters by the Host Code Page. There is an
	error in SNA Server 3.0 for the following four definitions:
	
	   - VERTICAL_LINE_BROKEN is defined as AF. The correct definition is A6.
	
	- ORDINAL_INDICATOR_FEMININE is defined as 8F. The correct definition is AA.
	
	- ORDINAL_INDICATOR_MASCULINE is defined as 90. The correct definition is BA.
	
	- SHARP_S_SMALL is defined as 9A. The correct definition is DF.
	
	CAUSE
	=====
	
	If a PDF file has a character mapping section and it is used with SNA Server
	3.0, it may exhibit incorrect behavior. If a PDF file does not have a character
	mapping section, no ASCII to ASCII character mapping occurs by default. An
	example of incorrect behavior may be explained from a host printer data stream
	that contains an EBCDIC BC character. The EBCDIC BC character is converted to an
	ASCII AF character by the default host code page. SNA Server 3.0 has both the
	OVERLINE and VERTICAL_LINE_BROKEN characters defined as an ASCII AF character in
	a PDF file character mapping section. Character mappings for the
	VERTICAL_LINE_BROKEN character in a PDF file used with SNA Server 3.0 appear not
	to change a print job due to the OVERLINE character also being defined as an
	ASCII AF character.
	
	WORKAROUND
	==========
	
	As a workaround, a character mapping entry can be made for the OVERLINE
	character to produce a mapping for a host printer data stream that contains an
	ASCII AF character after the host code page translation. This will only work if
	there are no OVERLINES in the host printer data stream that also need
	conversion.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0, SP1,
	SP2, SP3, and SP4.
	
	MORE INFORMATION
	================
	
	The following list summarizes the character mapping section definitions for SNA
	Server 3.0 and SNA Server 4.0. Definitions are the same for both SNA Server 4.0
	and SNA Server 4.0 unless otherwise noted:
	
	  SPACE 0x20
	  EXCLAMATION_POINT 0x21
	  QUOTATION_MARKS 0x22
	  NUMBER_SIGN 0x23
	  DOLLAR_SIGN 0x24
	  PERCENT_SIGN 0x25
	  AMPERSAND 0x26
	  APOSTROPHE 0x27
	  LEFT_PARENTHESIS 0x28
	  RIGHT_PARENTHESIS 0x29
	  ASTERISK 0x2A
	  PLUS_SIGN 0x2B
	  COMMA 0x2C
	  HYPHEN 0x2D
	  PERIOD 0x2E
	  SLASH 0x2F
	  ZERO 0x30
	  ONE 0x31
	  TWO 0x32
	  THREE 0x33
	  FOUR 0x34
	  FIVE 0x35
	  SIX 0x36
	  SEVEN 0x37
	  EIGHT 0x38
	  NINE 0x39
	  COLON 0x3A
	  SEMICOLON 0x3B
	  LESS_THAN_SIGN 0x3C
	  EQUAL_SIGN 0x3D
	  GREATER_THAN_SIGN 0x3E
	  QUESTION_MARK 0x3F
	  AT_SIGN 0x40
	  A_CAPITAL 0x41
	  B_CAPITAL 0x42
	  C_CAPITAL 0x43
	  D_CAPITAL 0x44
	  E_CAPITAL 0x45
	  F_CAPITAL 0x46
	  G_CAPITAL 0x47
	  H_CAPITAL 0x48
	  I_CAPITAL 0x49
	  J_CAPITAL 0x4A
	  K_CAPITAL 0x4B
	  L_CAPITAL 0x4C
	  M_CAPITAL 0x4D
	  N_CAPITAL 0x4E
	  O_CAPITAL 0x4F
	  P_CAPITAL 0x50
	  Q_CAPITAL 0x51
	  R_CAPITAL 0x52
	  S_CAPITAL 0x53
	  T_CAPITAL 0x54
	  U_CAPITAL 0x55
	  V_CAPITAL 0x56
	  W_CAPITAL 0x57
	  X_CAPITAL 0x58
	  Y_CAPITAL 0x59
	  Z_CAPITAL 0x5A
	  LEFT_BRACKET 0x5B
	  BACKSLASH 0x5C
	  RIGHT_BRACKET 0x5D
	  CIRCUMFLEX_ACCENT 0x5E
	  UNDERLINE 0x5F
	  GRAVE_ACCENT 0x60
	  A_SMALL 0x61
	  B_SMALL 0x62
	  C_SMALL 0x63
	  D_SMALL 0x64
	  E_SMALL 0x65
	  F_SMALL 0x66
	  G_SMALL 0x67
	  H_SMALL 0x68
	  I_SMALL 0x69
	  J_SMALL 0x6A
	  K_SMALL 0x6B
	  L_SMALL 0x6C
	  M_SMALL 0x6D
	  N_SMALL 0x6E
	  O_SMALL 0x6F
	  P_SMALL 0x70
	  Q_SMALL 0x71
	  R_SMALL 0x72
	  S_SMALL 0x73
	  T_SMALL 0x74
	  U_SMALL 0x75
	  V_SMALL 0x76
	  W_SMALL 0x77
	  X_SMALL 0x78
	  Y_SMALL 0x79
	  Z_SMALL 0x7A
	  LEFT_BRACE 0x7B
	  VERTICAL_BAR 0x7C
	  RIGHT_BRACE 0x7D
	  TILDE_ACCENT 0x7E
	  C_CEDILLA_CAPITAL 0xC7
	  U_DIAERESIS_SMALL 0xFC
	  E_ACUTE_SMALL 0xE9
	  A_CIRCUMFLEX_SMALL 0xE2
	  A_DIAERESIS_SMALL 0xE4
	  A_GRAVE_SMALL 0xE0
	  A_OVERCIRCLE_SMALL 0xE5
	  C_CEDILLA_SMALL 0xE7
	  E_CIRCUMFLEX_SMALL 0xEA
	  E_DIAERESIS_SMALL 0xEB
	  E_GRAVE_SMALL 0xE8
	  I_DIAERESIS_SMALL 0xEF
	  I_CIRCUMFLEX_SMALL 0xEE
	  I_GRAVE_SMALL 0xEC
	  A_DIAERESIS_CAPITAL 0xC4
	  A_OVERCIRCLE_CAPITAL 0xC5
	  E_ACUTE_CAPITAL 0xC9
	  AE_DIPTHONG_SMALL 0xE6
	  AE_DIPTHONG_CAPITAL 0xC6
	  O_CIRCUMFLEX_SMALL 0xF4
	  O_DIAERESIS_SMALL 0xF6
	  O_GRAVE_SMALL 0xF2
	  U_CIRCUMFLEX_SMALL 0xFB
	  U_GRAVE_SMALL 0xF9
	  Y_DIAERESIS_SMALL 0xFF
	  O_DIAERESIS_CAPITAL 0xD6
	  U_DIAERESIS_CAPITAL 0xDC
	  O_SLASH_SMALL 0xF8
	  POUND_SIGN 0xA3
	  SLASH_CAPITAL 0xD8
	  MULTIPLY_SIGN 0xD7
	  A_ACUTE_SMALL 0xE1
	  I_ACUTE_SMALL 0xED
	  O_ACUTE_SMALL 0xF3
	  U_ACUTE_SMALL 0xFA
	  N_TILDE_SMALL 0xF1
	  N_TILDE_CAPITAL 0xD1
	  ORDINAL_INDICATOR_FEMININE 0x8F (3.0) 0xAA (4.0)
	  ORDINAL_INDICATOR_MASCULINE 0x90 (3.0) 0xBA (4.0)
	  QUESTION_MARK_INVERTED 0xBF
	  REGISTERED_TRADEMARK_SYMBOL 0xAE
	  LOGICAL_NOT 0xAC
	  ONE_HALF 0xBD
	  ONE_QUARTER 0xBC
	  EXCLAMATION_POINT_INVERTED 0xA1
	  LEFT_ANGLE_QUOTES 0xAB
	  RIGHT_ANGLE_QUOTES 0xBB
	  A_ACUTE_CAPITAL 0xC1
	  A_CIRCUMFLEX_CAPITAL 0xC2
	  A_GRAVE_CAPITAL 0xC0
	  COPYRIGHT_SYMBOL 0xA9
	  CENT_SIGN 0xA2
	  YEN_SIGN 0xA5
	  A_TILDE_SMALL 0xE3
	  A_TILDE_CAPITAL 0xC3
	  INTERNATIONAL_CURRENCY_SYMBOL 0xA4
	  ETH_ICELANDIC_SMALL 0xF0
	  ETH_ICELANDIC_CAPITAL 0xD0
	  E_CIRCUMFLEX_CAPITAL 0xCA
	  E_DIAERESIS_CAPITAL 0xCB
	  E_GRAVE_CAPITAL 0xC8
	  I_DOTLESS_SMALL 0x7F
	  I_ACUTE_CAPITAL 0xCD
	  I_CIRCUMFLEX_CAPITAL 0xCE
	  I_DIAERESIS_CAPITAL 0xCF
	  VERTICAL_LINE_BROKEN 0xAF(3.0) 0xA6(4.0)
	  I_GRAVE_CAPITAL 0xCC
	  O_ACUTE_CAPITAL 0xD3
	  SHARP_S_SMALL 0x9A (3.0) 0xDF(4.0)
	  O_CIRCUMFLEX_CAPITAL 0xD4
	  O_GRAVE_CAPITAL 0xD2
	  O_TILDE_SMALL 0xF5
	  O_TILDE_CAPITAL 0xD5
	  MICRO_SYMBOL 0xB5
	  THORN_ICELANDIC_SMALL 0xFE
	  THORN_ICELANDIC_CAPITAL 0xDE
	  U_ACUTE_CAPITAL 0xDA
	  U_CIRCUMFLEX_CAPITAL 0xDB
	  U_GRAVE_CAPITAL 0xD9
	  Y_ACUTE_SMALL 0xFD
	  Y_ACUTE_CAPITAL 0xDD
	  OVERLINE 0xAF
	  ACUTE_ACCENT 0xB4
	  SYLLABLE_HYPHEN 0xAD
	  PLUS_OR_MINUS_SIGN 0xB1
	  THREE_QUARTERS 0xBE
	  PARAGRAPH_SYMBOL 0xB6
	  SECTION_SYMBOL 0xA7
	  DIVIDE_SIGN 0xF7
	  CEDILLA 0xB8
	  DEGREE_SYMBOL 0xB0
	  DIAERESIS 0xA8
	  MIDDLE_DOT_ACCENT 0xB7
	  ONE_SUPERSCRIPT 0xB9
	  TWO_SUPERSCRIPT 0xB2
	  THREE_SUPERSCRIPT 0xB3
	  REQUIRED_SPACE 0x00
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q164962 Added Support for the Character Mapping Section of the PDF File
	
	Additional query words: snaprintservice
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0,3.0SP1,3.0SP2,3.0SP3,3.0SP4
	Issue type        : kbinfo
	
	=============================================================================
	
